//#region generated meta
/**
 * @typedef {{
 *   reducer: { mark: any[]; array: any[] };
 *   item: any;
 *   index: number;
 *   length: number;
 * }} Inputs;
 * @typedef {{
 *   array: any[];
 *   reducer: { mark: any[]; array: any[] };
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

    const reducer = params.reducer || { mark: [], array: [] }

    reducer.mark[params.index] = true;
    reducer.array[params.index] = params.item;

    if (reducer.mark.reduce((sum, m) => sum + (m ? 1 : 0), 0) === params.length) {
        return { array: reducer.array }
    } else {
        return { reducer }
    }
}
