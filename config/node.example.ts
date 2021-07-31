export const node: any = {
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
}