//#region generated meta
/**
 * @typedef {{input: any}} Inputs
 * @typedef {{output: any}} Outputs
 */
//#endregion

/**
 * @param {Inputs} params
 * @param {import("@oomol/types/oocana").Context<Inputs, Outputs>} context
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
