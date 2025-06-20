//#region generated meta
/**
 * @typedef {{
 *   array: any;
 * }} Inputs;
 * @typedef {{
 *   item: any;
 *   index: number;
 *   length: number;
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
    if (params.array?.length) {
        for (let i = 0; i < params.array.length; i++) {
            await context.outputs({
                item: params.array[i],
                index: i,
                length: params.array.length
            })
        }
    }
}
