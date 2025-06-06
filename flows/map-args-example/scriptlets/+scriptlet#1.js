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
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {
   const prefix = params.args?.prefix ? `${params.args.prefix}-` : "";
   const suffix = params.args?.suffix ? `-${params.args.suffix}` : "";
   return { output: `${prefix}${params.item}${suffix}` };
}
