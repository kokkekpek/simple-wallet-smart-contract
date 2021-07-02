/**
 * @param value {string}
 * Example:
 *     '1_000_000_000'
 * @return {number}
 * Example:
 *     1000000000
 */
export default function (value: string): number {
    return parseInt(value.split('_').join(''))
}