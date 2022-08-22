import StyledProcessor from "@linaria/react/processors/styled";
import type { Expression } from "@babel/types";
import type { ValueCache, Params, TailProcessorParams } from "@linaria/tags";
declare class CustomLinariaProcessor extends StyledProcessor {
    #private;
    constructor(params: Params, ...args: TailProcessorParams);
    addInterpolation(node: Expression, source: string, cssText: string, unit?: string): string;
    build(values: ValueCache): void;
    protected getVariableId(value: string, cssPropertyName: string): string;
}
export default CustomLinariaProcessor;
//# sourceMappingURL=processor.d.ts.map