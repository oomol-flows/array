//#region generated meta
type Inputs = {
    item: any;
    min: number | null;
    max: number | null;
};
type Outputs = {
    output: any;
};
//#endregion

import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    // your code

    return { output: params.item >= (params.min ?? -Infinity) && params.item <= (params.max ?? Infinity) };
};
