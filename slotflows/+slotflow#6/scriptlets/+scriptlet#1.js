//#region generated meta
/**
 * @typedef {{
 *   item: any;
 * }} Inputs;
 * @typedef {{
 *   predicate: boolean;
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
    return { predicate: params.item.kind === "animal" };
}
