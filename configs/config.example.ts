export default {
    net: {
        test: {
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
             */
            port: '8080',

            /**
             * Version of test node. Actual for testing on local node. Run `tondev se version` to view options.
             * @see https://github.com/tonlabs/tondev
             * Examples:
             *     '0.27.2'
             *     'latest'
             */
            version: '0.27.2',

            /**
             * Absolute path to giver keys file.
             * @see https://github.com/tonlabs/tonos-se/tree/master/contracts
             * Examples:
             *     __dirname + 'common/keys/GiverV2.keys.json'
             *     '/home/user/keys/GiverV2.keys.json'
             */
            giverKeys: __dirname + '/../common/keys/GiverV2.keys.json',

            /**
             * How long to wait and result of call or deployment from local node in milliseconds
             * Examples:
             *     3000
             *     5000
             */
            timeout: 3000
        }
    }
}