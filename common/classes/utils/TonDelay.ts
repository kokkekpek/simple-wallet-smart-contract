export default class TonDelay {
    /**
     * Promise for setTimeout. It is used when you need to wait, for example, for the end of the auction.
     * @param milliseconds {number} Example:
     *     1000 // 1 second
     * @return {Promise<void>}
     */
    public async wait(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
}