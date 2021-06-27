pragma ton-solidity >= 0.46.0;

/**
 * Error codes
 *     100 - Method for the owner only
 *     101 - Owner public key cannot be null
 */
contract SimpleWallet_idle {
    /********
     * PURE *
     ********/
    function getVersion() public pure returns(uint8 version) {
        return 2;
    }



    /**************************
     * PURE * ON CODE UPGRADE *
     **************************/
    function onCodeUpgrade() private pure {}
}