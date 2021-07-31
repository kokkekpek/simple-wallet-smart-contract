export const net: any = {
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
                    'https://net1.ton.dev'
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
}