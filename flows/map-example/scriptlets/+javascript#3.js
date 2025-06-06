//#region generated meta
/**
 * @typedef {{
 *   input: any[];
 * }} Inputs;
 * @typedef {{
 *   output: any[];
 * }} Outputs;
 */
//#endregion

/**
 * @import { Context } from "@oomol/types/oocana";
 * @param {Inputs} params
 * @param {import("@oomol/types/oocana").Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {

   

   return { output: params.input + 1 };
}
