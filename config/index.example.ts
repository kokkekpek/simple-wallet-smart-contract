export const config: any = {
    node: {
        /**
         * Version of local node. Run `tondev se version` to view options.
         * @see https://github.com/tonlabs/tondev
         * Examples:
         *     'latest'
         *     '0.28.3'
         */
        version: 'latest',

        /**
         * Port on localhost used to expose GraphQL API.
         * Examples:
         *     8080
         *     80
         *     443
         */
        port: 8080,

        /**
         * Port on localhost used to expose ArangoDB API.
         * Examples:
         *     'none'
         *     3232
         */
        dbPort: 'none',

        /**
         * Local node instance name. If you not up instance before use `default` or `*`.
         * Examples:
         *     'default'
         *     '*'
         */
        instance: 'default'
    },
    net: {
        local: {
            /**
             * TonClient config. See ClientConfig interface.
             * @see https://github.com/tonlabs/ton-client-js/blob/master/packages/core/src/modules.ts
             */
            client: {
                network: {
                    /**
                     * List of DApp Server addresses.
                     * Any correct URL format can be specified, including IP addresses.
                     * This parameter is prevailing over server_address.
                     */
                    endpoints: [
                        'http://localhost:8080'
                    ],
                    /**
                     * Maximum timeout that is used for query response.
                     * Must be specified in milliseconds. Default is 40000 (40 sec).
                     */
                    wait_for_timeout: 30_000
                }
            },
            /**
             * Info about network that not stored in client. Transaction fee, giver name etc.
             */
            transactions: {
                /**
                 * Crystals required for transaction fee. 1 is `1 ton` or `1e9 nano ton`
                 * Examples:
                 *     0.03
                 *     1
                 */
                fee: 0.02,

                /**
                 * Tolerance when comparing contract balances.
                 * Use it because sometimes after transfer your balance loose some nano grams.
                 * e.g. contract receive 9_999_999 instead 10_000_000.
                 * Examples:
                 *     0.000_001
                 *     0.001
                 */
                tolerance: 0.000_001,

                /**
                 * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
                 * Examples:
                 *     'dev'
                 *     'se'
                 */
                giver: 'se'
            }
        },
        dev: {
            /**
             * TonClient config. See ClientConfig interface.
             * @see https://github.com/tonlabs/ton-client-js/blob/master/packages/core/src/modules.ts
             */
            client: {
                network: {
                    /**
                     * List of DApp Server addresses.
                     * Any correct URL format can be specified, including IP addresses.
                     * This parameter is prevailing over server_address.
                     */
                    endpoints: [
                        'https://net1.ton.dev',
                        'https://net2.ton.dev'
                    ],
                    /**
                     * Maximum timeout that is used for query response.
                     * Must be specified in milliseconds. Default is 40000 (40 sec).
                     */
                    wait_for_timeout: 60_000
                }
            },
            /**
             * Info about network that not stored in client. Transaction fee, giver name etc.
             */
            transactions: {
                /**
                 * Crystals required for transaction fee. 1 is `1 ton` or `1e9 nano ton`
                 * Examples:
                 *     0.03
                 *     1
                 */
                fee: 0.02,

                /**
                 * Tolerance when comparing contract balances.
                 * Use it because sometimes after transfer your balance loose some nano grams.
                 * e.g. contract receive 9_999_999 instead 10_000_000.
                 * Examples:
                 *     0.000_001
                 *     0.001
                 */
                tolerance: 0.000_001,

                /**
                 * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
                 * Examples:
                 *     'dev'
                 *     'se'
                 */
                giver: 'dev'
            }
        },
        main: {
            /**
             * TonClient config. See ClientConfig interface.
             * @see https://github.com/tonlabs/ton-client-js/blob/master/packages/core/src/modules.ts
             */
            client: {
                network: {
                    /**
                     * List of DApp Server addresses.
                     * Any correct URL format can be specified, including IP addresses.
                     * This parameter is prevailing over server_address.
                     */
                    endpoints: [
                        'https://main2.ton.dev',
                        'https://main3.ton.dev',
                        'https://main4.ton.dev'
                    ],
                    /**
                     * Maximum timeout that is used for query response.
                     * Must be specified in milliseconds. Default is 40000 (40 sec).
                     */
                    wait_for_timeout: 60_000
                }
            },
            /**
             * Info about network that not stored in client. Transaction fee, giver name etc.
             */
            transactions: {
                /**
                 * Crystals required for transaction fee. 1 is `1 ton` or `1e9 nano ton`
                 * Examples:
                 *     0.03
                 *     1
                 */
                fee: 0.02,

                /**
                 * Tolerance when comparing contract balances.
                 * Use it because sometimes after transfer your balance loose some nano grams.
                 * e.g. contract receive 9_999_999 instead 10_000_000.
                 * Examples:
                 *     0.000_001
                 *     0.001
                 */
                tolerance: 0.000_001,

                /**
                 * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
                 * Examples:
                 *     'dev'
                 *     'se'
                 */
                giver: 'dev'
            }
        },
        fld: {
            /**
             * TonClient config. See ClientConfig interface.
             * @see https://github.com/tonlabs/ton-client-js/blob/master/packages/core/src/modules.ts
             */
            client: {
                network: {
                    /**
                     * List of DApp Server addresses.
                     * Any correct URL format can be specified, including IP addresses.
                     * This parameter is prevailing over server_address.
                     */
                    endpoints: [
                        'https://gql.custler.ne'
                    ],
                    /**
                     * Maximum timeout that is used for query response.
                     * Must be specified in milliseconds. Default is 40000 (40 sec).
                     */
                    wait_for_timeout: 60_000
                }
            },
            /**
             * Info about network that not stored in client. Transaction fee, giver name etc.
             */
            transactions: {
                /**
                 * Crystals required for transaction fee. 1 is `1 ton` or `1e9 nano ton`
                 * Examples:
                 *     0.03
                 *     1
                 */
                fee: 0.02,

                /**
                 * Tolerance when comparing contract balances.
                 * Use it because sometimes after transfer your balance loose some nano grams.
                 * e.g. contract receive 9_999_999 instead 10_000_000.
                 * Examples:
                 *     0.000_001
                 *     0.001
                 */
                tolerance: 0.000_001,

                /**
                 * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
                 * Examples:
                 *     'dev'
                 *     'se'
                 */
                giver: 'dev'
            }
        }
    },
    contracts: {
        giver: {
            /**
             * Absolute path to keys file.
             * Examples:
             *     `${__dirname}/../node_modules/jton-contracts/dist/tonlabs/GiverV2/contract/GiverV2.se.keys.json`
             *     `${__dirname}/../keys/GiverV2.keys.json`
             *     `/home/user/keys/GiverV2.keys.json`
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
             * Absolute path to keys file.
             * Examples:
             *     `${__dirname}/../keys/SafeMultisigWallet.keys.json`
             *     `/home/user/keys/SafeMultisigWallet.keys.json`
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
             * Absolute path to keys file.
             * Examples:
             *     `${__dirname}/../keys/SimpleWallet.keys.json`
             *     `/home/user/keys/SimpleWallet.keys.json`
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
    },

    /**
     * Default network when no network is specified.
     * Examples:
     *     'local'
     *     'dev'
     */
    defaultNet: 'local',

    /**
     * One or more BCP 47 extension sequences or `undefined`
     * Examples:
     *     'RU'
     *     'EN'
     *     undefined
     */
    locale: undefined
}