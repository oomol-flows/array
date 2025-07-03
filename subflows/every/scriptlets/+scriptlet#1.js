//#region generated meta
/**
 * @typedef {{
 *   reducer: boolean;
 *   predicate: boolean;
 *   index: number;
 *   length: number;
 * }} Inputs;
 * @typedef {{
 *   reducer: boolean;
 *   some: boolean;
 * }} Outputs;
 */
//#endregion

/**
 * @import { Context } from "@oomol/types/oocana"
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Partial<Outputs> | undefined | void>}
 */
export default async function (params, context) {
    const reducer = params.reducer && params.predicate;

    if (params.index + 1 === params.length) {
        return { some: reducer }
    }

    return { reducer };
}
