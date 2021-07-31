export const contracts: any = {
    giver: {
        /**
         * Absolute path or array of paths to keys file.
         * Examples:
         *     `${__dirname}/../keys/Contract.keys.json`
         *     `/home/user/keys/Contract.keys.json`
         */
        keys: {
            se: `${__dirname}/../node_modules/jton-contracts/dist/tonlabs/GiverV2/8a2bc005cfec4ecd770d50b074179e525b76513b/source/GiverV2.se.keys.json`,
            dev: `${__dirname}/../keys/GiverV2.keys.json`
        },

        /**
         * Crystals required for deployment. 1 = 1 ton = 1e9 nano ton.
         * Examples:
         *     0.03
         *     1
         */
        requiredForDeployment: 0.03
    },
    safeMultisigWallet: {
        /**
         * Absolute path or array of paths to keys file.
         * Examples:
         *     `${__dirname}/../keys/Contract.keys.json`
         *     `/home/user/keys/Contract.keys.json`
         */
        keys: `${__dirname}/../keys/SafeMultisigWallet.keys.json`,

        /**
         * Crystals required for deployment. 1 = 1 ton = 1e9 nano ton.
         * Examples:
         *     0.03
         *     1
         */
        requiredForDeployment: 0.07
    },
    simpleWallet: {
        /**
         * Absolute path or array of paths to keys file.
         * Examples:
         *     `${__dirname}/../keys/Contract.keys.json`
         *     `/home/user/keys/Contract.keys.json`
         */
        keys: `${__dirname}/../keys/SimpleWallet.keys.json`,

        /**
         * Crystals required for deployment. 1 = 1 ton = 1e9 nano ton.
         * Examples:
         *     0.03
         *     1
         */
        requiredForDeployment: 0.03
    }
}