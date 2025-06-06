//#region generated meta
/**
 * @typedef {{
 *   array: any[];
 *   predicates: any[];
 * }} Inputs;
 * @typedef {{
 *   array: any[];
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

    

    return { array: params.array?.filter((_, i) => params.predicates?.[i]) };
}
