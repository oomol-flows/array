//#region generated meta
/**
 * @typedef {{
 *   item: any;
 *   prefix: string;
 *   suffix: string;
 * }} Inputs;
 * @typedef {{
 *   output: any;
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

    // your code

    return { output: `${params.prefix || ''}${params.item}${params.suffix || ''}` };
}
