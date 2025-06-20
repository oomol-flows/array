//#region generated meta
/**
 * @typedef {{
 * }} Inputs;
 * @typedef {{
 *   output: any[];
 * }} Outputs;
 */
//#endregion

/**
 * @import { Context } from "@oomol/types/oocana";
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {
    return { output: [1,2,3] };
}
