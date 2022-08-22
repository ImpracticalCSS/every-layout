"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _CustomLinariaProcessor_custom_template, _CustomLinariaProcessor_variableIdx, _CustomLinariaProcessor_variablesCache;
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@linaria/react/processors/styled"));
const tags_1 = require("@linaria/tags");
const templateProcessor_1 = __importDefault(require("./templateProcessor"));
class CustomLinariaProcessor extends styled_1.default {
    constructor(params, ...args) {
        const [tag, tagOp, template] = params;
        super([tag, tagOp, template], ...args);
        _CustomLinariaProcessor_custom_template.set(this, []);
        _CustomLinariaProcessor_variableIdx.set(this, 0);
        _CustomLinariaProcessor_variablesCache.set(this, new Map());
        (0, tags_1.validateParams)(params, ['tag', ['call', 'member'], ['template']], 'Invalid usage of `styled` tag');
        const template_elements = params[2][1];
        template_elements.forEach((element) => {
            if ('kind' in element) {
                this.dependencies.push(element);
            }
        });
        __classPrivateFieldSet(this, _CustomLinariaProcessor_custom_template, template_elements, "f");
    }
    addInterpolation(node, source, cssText, unit = '') {
        console.log("source", source);
        const matches = cssText.match(/([\w-]+)(:\s$)/gm);
        if (!matches) {
            console.error(node, cssText);
            throw new Error("Unable to extract css property name for: ");
        }
        const cssPropertyName = matches[0].replace(": ", "");
        const id = this.getVariableId(source + unit, cssPropertyName);
        this.interpolations.push({
            id,
            node,
            source,
            unit,
        });
        const varId = super.addInterpolation(node, source, unit);
        return varId;
    }
    build(values) {
        if (this.artifacts.length > 0) {
            throw new Error('Tag is already built');
        }
        const artifact = (0, templateProcessor_1.default)(this, __classPrivateFieldGet(this, _CustomLinariaProcessor_custom_template, "f"), values);
        if (artifact) {
            this.artifacts.push(['css', artifact]);
        }
    }
    // @ts-ignore
    getVariableId(value, cssPropertyName) {
        var _a, _b;
        if (!__classPrivateFieldGet(this, _CustomLinariaProcessor_variablesCache, "f").has(value)) {
            const { displayName, slug } = this;
            const index = (__classPrivateFieldSet(this, _CustomLinariaProcessor_variableIdx, (_b = __classPrivateFieldGet(this, _CustomLinariaProcessor_variableIdx, "f"), _a = _b++, _b), "f"), _a);
            const id = `${displayName.toLowerCase()}-${cssPropertyName}-${slug}-${index}`;
            __classPrivateFieldGet(this, _CustomLinariaProcessor_variablesCache, "f").set(value, id);
        }
        return __classPrivateFieldGet(this, _CustomLinariaProcessor_variablesCache, "f").get(value);
    }
}
_CustomLinariaProcessor_custom_template = new WeakMap(), _CustomLinariaProcessor_variableIdx = new WeakMap(), _CustomLinariaProcessor_variablesCache = new WeakMap();
exports.default = CustomLinariaProcessor;
