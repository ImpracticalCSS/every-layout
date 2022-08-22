import StyledProcessor from "@linaria/react/processors/styled";
import type { Expression, TemplateElement } from "@babel/types";
import type {
    ExpressionValue,
    ValueCache,
    Params,
    TailProcessorParams,

} from "@linaria/tags";
import { validateParams } from "@linaria/tags";
import templateProcessor from "./templateProcessor";

class CustomLinariaProcessor extends StyledProcessor {
    #custom_template: (TemplateElement | ExpressionValue)[] = [];
    #variableIdx = 0;
    #variablesCache = new Map<string, string>();

    public constructor(params: Params, ...args: TailProcessorParams) {
        const [tag, tagOp, template] = params;

        super([tag, tagOp, template], ...args);

        validateParams(
            params,
            ['tag', ['call', 'member'], ['template']],
            'Invalid usage of `styled` tag'
        );

        const template_elements = params[2][1];

        template_elements.forEach((element) => {
            if ('kind' in element) {
                this.dependencies.push(element);
            }
        });

        this.#custom_template = template_elements;
    }

    public addInterpolation(node: Expression, source: string, cssText: string, unit: string = '') {
        const matches = cssText.match(/([\w-]+)(:\s$)/gm);

        if (!matches) {
            console.error(node, cssText);
            throw new Error("Unable to extract css property name for: ")
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

    public override build(values: ValueCache) {
        if (this.artifacts.length > 0) {
            throw new Error('Tag is already built');
        }

        const artifact = templateProcessor(this, this.#custom_template, values);

        if (artifact) {
            this.artifacts.push(['css', artifact]);
        }
    }

    // @ts-ignore
    protected getVariableId(value: string, cssPropertyName: string): string {
        if (!this.#variablesCache.has(value)) {
            const { displayName, slug } = this;
            const index = this.#variableIdx++;
            const id = `${displayName.toLowerCase()}-${cssPropertyName}-${slug}-${index}`;

            this.#variablesCache.set(value, id);
        }

        return this.#variablesCache.get(value)!;
    }
}

export default CustomLinariaProcessor;
