export default {
    net: {
        local: {
            /**
             * Version of local node. Run `tondev se version` to view options.
             * @see https://github.com/tonlabs/tondev
             * Examples:
             *     'latest'
             *     '0.28.3'
             */
            version: 'latest',

            /**
             * Network URL without port.
             * Examples:
             *     'http://localhost'
             *     'http://0.0.0.0'
             */
            url: 'http://localhost',

            /**
             * Network port.
             * Examples:
             *     '8080'
             *     '80'
             *     '443'
             */
            port: '8080',

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3000
             *     30000
             *     60000
             */
            timeout: 30000
        },
        test: {
            /**
             * Network URL without port.
             * Examples:
             *     'http://localhost'
             *     'https://net.ton.dev'
             *     'https://main.ton.dev'
             *     'https://gql.custler.net'
             */
            url: 'http://localhost',

            /**
             * Network port.
             * Examples:
             *     '8080'
             *     '80'
             *     '443'
             */
            port: '8080',

            /**
             * IMPORTANT!!!
             * Dont use default paths. Store keys in encrypted directory or key storage.
             * For directory encryption on linux use CryFS or any other solution.
             */
            contracts: {
                giver: {
                    /**
                     * Absolute path to keys file.
                     * Examples:
                     *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                     *     __dirname + '/../keys/GiverV2.keys.json'
                     *     '/home/user/keys/GiverV2.keys.json'
                     */
                    keys: __dirname + '/../library/keys/GiverV2.se.keys.json'
                }
            },

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3000
             *     30000
             *     60000
             */
            timeout: 60000
        },
        deploy: {
            /**
             * Network URL without port.
             * Examples:
             *     'http://localhost'
             *     'https://net.ton.dev'
             *     'https://main.ton.dev'
             *     'https://gql.custler.net'
             */
            url: 'http://localhost',

            /**
             * Network port.
             * Examples:
             *     '8080'
             *     '80'
             *     '443'
             */
            port: '8080',

            /**
             * IMPORTANT!!!
             * Dont use default paths. Store keys in encrypted directory or key storage.
             * For directory encryption on linux use CryFS or any other solution.
             */
            contracts: {
                giver: {
                    /**
                     * Absolute path to keys file.
                     * Examples:
                     *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                     *     __dirname + '/../keys/GiverV2.keys.json'
                     *     '/home/user/keys/GiverV2.keys.json'
                     */
                    keys: __dirname + '/../library/keys/GiverV2.se.keys.json',

                    /**
                     * Crystals required for deployment. 1 = 1 ton = 1e9 nano ton
                     * Examples:
                     *     0.03
                     *     1
                     */
                    requiredTons: 0.03
                },
                wallet: {
                    /**
                     * Absolute path to keys file.
                     * Examples:
                     *     __dirname + '/../keys/SafeMultisigWallet.keys.json'
                     *     '/home/user/keys/SafeMultisigWallet.keys.json'
                     */
                    keys: __dirname + '/../keys/SafeMultisigWallet.keys.json',

                    /**
                     * Crystals required for deployment. 1 = 1 ton = 1e9 nano ton
                     * Examples:
                     *     0.03
                     *     1
                     */
                    requiredTons: 0.07
                },
                simpleWallet: {
                    /**
                     * Absolute path to keys file.
                     * Examples:
                     *     __dirname + '/../keys/SimpleWallet.keys.json'
                     *     '/home/user/keys/SimpleWallet.keys.json'
                     */
                    keys: __dirname + '/../keys/SimpleWallet.keys.json',

                    /**
                     * Crystals required for deployment. 1 = 1 ton = 1e9 nano ton
                     * Examples:
                     *     0.03
                     *     1
                     */
                    requiredTons: 0.03
                }
            },

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3000
             *     30000
             *     60000
             */
            timeout: 60000,

            /**
             * Crystals required for transaction fee. 1 = 1 ton = 1e9 nano ton
             * Examples:
             *     0.03
             *     1
             */
            transactionFee: 0.02,

            /**
             * Tolerance when comparing contract balances.
             * Use it because sometimes after transfer your balance loose some nano grams.
             * e.g. contract receive 9_999_999 instead 10_000_000.
             * Examples:
             *     0.000_001
             *     0.001
             */
            tolerance: 0.000_001
        }
    },

    /**
     * One or more BCP 47 extension sequences or `undefined`
     * Examples:
     *     'RU'
     *     'EN'
     */
    locale: undefined
}