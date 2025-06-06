//#region generated meta
/**
 * @typedef {{input: any}} Inputs
 * @typedef {{output: any}} Outputs
 */
//#endregion

/**
 * @import { Context } from "@oomol/types/oocana";
 * @param {Inputs} params
 * @param {import("@oomol/types/oocana").Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {
    const min = params.args.min ?? -Infinity;
    const max = params.args.max ?? Infinity;
    return { output: params.item >= min && params.item <= max };
}
