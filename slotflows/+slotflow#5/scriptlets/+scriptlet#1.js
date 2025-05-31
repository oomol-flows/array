//#region generated meta
/**
 * @import { Context } from "@oomol/types/oocana"
 * @typedef {{item: any, args: any}} Inputs
 * @typedef {{output: any}} Outputs
 */
//#endregion

/**
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {

    // your code

    return { output: `${params.args?.prefix || ''}${params.item}${params.args?.suffix || ''}` };
}
