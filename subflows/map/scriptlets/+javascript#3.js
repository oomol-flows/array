//#region generated meta
/**
 * @typedef {{
 *   array: any;
 *   args: any;
 * }} Inputs;
 * @typedef {{
 *   item: any;
 *   args: any;
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
            await context.output("item", params.array[i]);
            await context.output("index", i);
            await context.output("length", params.array.length);
            await context.output("args", params.args);
        }
    }
}
