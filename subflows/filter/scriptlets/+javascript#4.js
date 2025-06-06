//#region generated meta
/**
 * @typedef {{
 *   reducer: any[];
 *   predicate: any;
 *   index: number;
 *   length: number;
 * }} Inputs;
 * @typedef {{
 *   predicates: any[];
 *   reducer: any[];
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

    const reducer = params.reducer || []

    reducer[params.index] = params.predicate;

    if (reducer.reduce((sum, m) => sum + (m != null ? 1 : 0), 0) === params.length) {
        return { predicates: reducer }
    } else {
        return { reducer }
    }
}
