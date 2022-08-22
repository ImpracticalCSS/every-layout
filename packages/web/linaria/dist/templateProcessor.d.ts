/**
 * This file handles transforming template literals to class names or styled components and generates CSS content.
 * It uses CSS code from template literals and evaluated values of lazy dependencies stored in ValueCache.
 */
import type { TemplateElement } from "@babel/types";
import type { ExpressionValue, ValueCache, Rules, Replacements } from "@linaria/tags";
import type CustomLinariaProcessor from "./processor";
export default function templateProcessor(tagProcessor: CustomLinariaProcessor, [...template]: (TemplateElement | ExpressionValue)[], valueCache: ValueCache): [rules: Rules, sourceMapReplacements: Replacements] | null;
//# sourceMappingURL=templateProcessor.d.ts.map