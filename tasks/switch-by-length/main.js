//#region generated meta
/**
 * @typedef {{
 *   array: any[];
 * }} Inputs;
 * @typedef {{
 * }} Outputs;
 */
//#endregion

const matcher = /^\s*(>|>=|<|<=|=)*\s*(\d+)$/;

/**
 * @import { Context } from "@oomol/types/oocana"
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Partial<Outputs> | undefined | void>}
 */
export default async function (params, context) {
    const array = params.array;
    if (!Array.isArray(array)) return;

    if (!context.outputsDef) return;

    const defs = Object.values(context.outputsDef);
    if (!defs.length) return;

    for (const def of defs) {
        const handle = def.handle;
        const result = matcher.exec(handle);
        if (!result) {
            context.output(handle, array);
            continue;
        }

        const operand = result[1];
        const length = Number(result[2]);
        if (Number.isNaN(length)) {
            context.output(handle, array);
            continue;
        }

        switch(operand) {
            case ">": {
                if (array.length > length) {
                    context.output(handle, array)
                }
                break;
            }
            case ">=": {
                if (array.length >= length) {
                    context.output(handle, array);
                }
                break;
            }
            case "<": {
                if (array.length < length) {
                    context.output(handle, array);
                }
                break;
            }
            case "<=": {
                if (array.length <= length) {
                    context.output(handle, array);
                }
                break;
            }
            default: {
                if (array.length === length) {
                    context.output(handle, array);
                }
                break;
            }
        }
    }
}
