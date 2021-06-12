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
             *     'http://0.0.0.0
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
             *     'https://net.ton.dev
             *     'https://main.ton.dev
             *     'https://gql.custler.net
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
            giver: {
                /**
                 * Absolute path to giver keys file.
                 * Examples:
                 *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                 *     __dirname + '/../keys/GiverV2.keys.json'
                 *     '/home/user/keys/GiverV2.keys.json'
                 */
                keys: __dirname + '/../library/keys/GiverV2.se.keys.json'
            },

            /**
             * How long to wait result of call or deployment in milliseconds.
             * Examples:
             *     3000
             *     30000
             *     60000
             */
            timeout: 3000
        },
        deploy: {
            /**
             * Network URL without port.
             * Examples:
             *     'http://localhost'
             *     'https://net.ton.dev
             *     'https://main.ton.dev
             *     'https://gql.custler.net
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
            giver: {
                /**
                 * Absolute path to keys file.
                 * Examples:
                 *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                 *     __dirname + '/../keys/GiverV2.keys.json'
                 *     '/home/user/keys/GiverV2.keys.json'
                 */
                keys: __dirname + '/../library/keys/GiverV2.se.keys.json'
            },


            /**
             * IMPORTANT!!!
             * Dont use default path. Store keys in encrypted directory or key storage.
             * For directory encryption on linux use CryFS or any other solution.
             */
            keys: {
                /**
                 * Absolute path to giver keys file.
                 * Examples:
                 *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                 *     '/home/user/keys/GiverV2.keys.json'
                 */
                giver: __dirname + '/../library/keys/GiverV2.se.keys.json',

                /**
                 * Absolute path to SafeMultisigWallet keys file.
                 * Examples:
                 *     __dirname + '/../keys/SafeMultisigWallet.keys.json'
                 *     '/home/user/keys/SafeMultisigWallet.keys.json'
                 */
                wallet: __dirname + '/../keys/SafeMultisigWallet.keys.json',

                /**
                 * Absolute path to SimpleWallet keys file.
                 * Examples:
                 *     __dirname + '/../keys/SafeMultisigWallet.keys.json'
                 *     '/home/user/keys/SafeMultisigWallet.keys.json'
                 */
                simpleWallet: __dirname + '/../keys/SimpleWallet.keys.json'
            },

            /**
             * How long to wait and result of call or deployment from local node in milliseconds
             * Examples:
             *     3000
             *     5000
             */
            timeout: 30000,

            /**
             * One or more BCP 47 extension sequences or `undefined`
             * Examples:
             *     'RU'
             *     'EN'
             */
            locale: undefined
        }
    }
}