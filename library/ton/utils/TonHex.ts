export default class TonHex {
    /**
     * Add 0x to number or string.
     * @param {number} number Example:
     *     '123'
     * @return {string} Example:
     *     '0x123'
     */
    public x0(number: number | string): string {
        return `0x${number}`
    }

    /**
     * Convert abi to hex.
     * @param {Object} abi Example:
     *     '{ABI ver...'
     * @return {string} Example:
     *     '7b0a0922...'
     */
    public abi(abi: Object): string {
        return this.string(JSON.stringify(abi))
    }

    /**
     * Convert string to hex.
     * @param {string} string Example:
     *     'XYZ123'
     * @return {string} Example:
     *     '58595a313233'
     */
    public string(string: string): string {
        return string.split('').map(x => x.charCodeAt(0).toString(16)).join('')
    }

    /**
     * Convert array of strings to hex. Actual for string[] parameter in Solidity.
     * @param {string[]} strings Example:
     *     ['XYZ123', 'ABC456']
     * @return {string} Example:
     *     ['58595a313233', '414243343536']
     */
    public strings(strings: string[]): string[] {
        return strings.map(x => this.string(x))
    }

    /**
     * Convert number to hex.
     * @param {number} number Example:
     *     1_000_000_000
     * @return {string} Example:
     *     '0x3b9aca00'
     */
    public number(number: number): string {
        return this.x0(number.toString(16))
    }
}