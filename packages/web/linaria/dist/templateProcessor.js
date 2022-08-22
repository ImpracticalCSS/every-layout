"use strict";
/* eslint-disable no-continue */
/**
 * This file handles transforming template literals to class names or styled components and generates CSS content.
 * It uses CSS code from template literals and evaluated values of lazy dependencies stored in ValueCache.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("@linaria/tags");
// @ts-ignore
const stripLines_1 = __importDefault(require("@linaria/tags/lib/utils/stripLines"));
// @ts-ignore
const units_1 = require("@linaria/tags/lib/utils/units");
// @ts-ignore
const throwIfInvalid_1 = __importDefault(require("@linaria/tags/lib/utils/throwIfInvalid"));
// @ts-ignore
const toCSS_1 = __importStar(require("@linaria/tags/lib/utils/toCSS"));
// Match any valid CSS units followed by a separator such as ;, newline etc.
const unitRegex = new RegExp(`^(?:${units_1.units.join("|")})\\b`);
function templateProcessor(tagProcessor, [...template], valueCache) {
    var _a, _b, _c, _d;
    const sourceMapReplacements = [];
    // Check if the variable is referenced anywhere for basic DCE
    // Only works when it's assigned to a variable
    const { isReferenced } = tagProcessor;
    // Serialize the tagged template literal to a string
    let cssText = '';
    let item;
    let lastTemplateElementLocation;
    // eslint-disable-next-line no-cond-assign
    while ((item = template.shift())) {
        if ('type' in item) {
            // It's a template element
            cssText += item.value.cooked;
            lastTemplateElementLocation = item.loc;
            continue;
        }
        // It's an expression
        const { ex } = item;
        const { end } = ex.loc;
        const beforeLength = cssText.length;
        // The location will be end of the current string to start of next string
        const next = template[0]; // template[0] is the next template element
        const loc = {
            // +1 because an expression location always shows 1 column before
            start: {
                line: lastTemplateElementLocation.end.line,
                column: lastTemplateElementLocation.end.column + 1,
            },
            end: next
                ? { line: next.loc.start.line, column: next.loc.start.column }
                : { line: end.line, column: end.column + 1 },
        };
        const value = valueCache.get(ex.name);
        (0, throwIfInvalid_1.default)(tagProcessor.isValidValue.bind(tagProcessor), value, item, item.source);
        if (value !== undefined && typeof value !== 'function') {
            // Skip the blank string instead of throw ing an error
            if (value === '') {
                continue;
            }
            if ((0, tags_1.hasMeta)(value)) {
                // If it's a React component wrapped in styled, get the class name
                // Useful for interpolating components
                cssText += `.${value.__linaria.className}`;
            }
            else if ((0, toCSS_1.isCSSable)(value)) {
                // If it's a plain object or an array, convert it to a CSS string
                cssText += (0, stripLines_1.default)(loc, (0, toCSS_1.default)(value));
            }
            else {
                // For anything else, assume it'll be stringified
                cssText += (0, stripLines_1.default)(loc, value);
            }
            sourceMapReplacements.push({
                original: loc,
                length: cssText.length - beforeLength,
            });
        }
        // Is it props based interpolation?
        if (typeof value === 'function') {
            // Check if previous expression was a CSS variable that we replaced
            // If it has a unit after it, we need to move the unit into the interpolation
            // e.g. `var(--size)px` should actually be `var(--size)`
            // So we check if the current text starts with a unit, and add the unit to the previous interpolation
            // Another approach would be `calc(var(--size) * 1px), but some browsers don't support all units
            // https://bugzilla.mozilla.org/show_bug.cgi?id=956573
            const matches = (_a = next.value.cooked) === null || _a === void 0 ? void 0 : _a.match(unitRegex);
            try {
                if (matches) {
                    template.shift();
                    const [unit] = matches;
                    const varId = tagProcessor.addInterpolation(item.ex, item.source, cssText, unit);
                    cssText += `var(--${varId})`;
                    cssText += (_d = (_b = next.value.cooked) === null || _b === void 0 ? void 0 : _b.substring((_c = unit === null || unit === void 0 ? void 0 : unit.length) !== null && _c !== void 0 ? _c : 0)) !== null && _d !== void 0 ? _d : '';
                }
                else {
                    const varId = tagProcessor.addInterpolation(item.ex, item.source, cssText);
                    cssText += `var(--${varId})`;
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    throw item.buildCodeFrameError(e.message);
                }
                throw e;
            }
        }
    }
    const rules = tagProcessor.extractRules(valueCache, cssText, tagProcessor.location);
    // tagProcessor.doRuntimeReplacement(classes);
    if (!isReferenced && !cssText.includes(':global')) {
        return null;
    }
    // eslint-disable-next-line no-param-reassign
    return [rules, sourceMapReplacements];
}
exports.default = templateProcessor;
