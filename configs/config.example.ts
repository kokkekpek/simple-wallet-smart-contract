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
             * Network URL.
             * Examples:
             *     'http://localhost:8080'
             *     'http://localhost'
             *     'http://0.0.0.0'
             */
            url: 'http://localhost:8080',

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3_000
             *     30_000
             *     60_000
             */
            timeout: 30_000,

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
            tolerance: 0.000_001,

            /**
             * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
             * Examples:
             *     'dev'
             *     'se'
             */
            giver: 'se'
        },
        dev: {
            /**
             * Network URL.
             * Examples:
             *     'https://net.ton.dev'
             *     'https://main.ton.dev'
             *     'https://gql.custler.net'
             */
            url: 'https://net.ton.dev',

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3_000
             *     30_000
             *     60_000
             */
            timeout: 60_000,

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
            tolerance: 0.000_001,

            /**
             * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
             * Examples:
             *     'dev'
             *     'se'
             */
            giver: 'dev'
        },
        main: {
            /**
             * Network URL.
             * Examples:
             *     'https://net.ton.dev'
             *     'https://main.ton.dev'
             *     'https://gql.custler.net'
             */
            url: 'https://main.ton.dev',

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3_000
             *     30_000
             *     60_000
             */
            timeout: 60_000,

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
            tolerance: 0.000_001,

            /**
             * Name of the keys for the Giver v2 smart contract, which are used to deploy contracts.
             * Examples:
             *     'dev'
             *     'se'
             */
            giver: 'dev'
        },
        fld: {
            /**
             * Network URL.
             * Examples:
             *     'https://net.ton.dev'
             *     'https://main.ton.dev'
             *     'https://gql.custler.net'
             */
            url: 'https://gql.custler.net',

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3_000
             *     30_000
             *     60_000
             */
            timeout: 60_000,

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
                se: `${__dirname}/../node_modules/jton-contracts/dist/tonlabs/GiverV2/2021-04-28T09:41:28Z/contract/GiverV2.se.keys.json`,
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