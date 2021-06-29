import {TonClient} from '@tonclient/core'

export default class Client {
    /**
     * Creates client.
     * @param url {string}
     * Examples:
     *     'http://localhost'
     *     'https://net.ton.dev'
     * @return {TonClient}
     */
    public static create(url: string): TonClient {
        return new TonClient({
            network: {
                server_address: url
            }
        })
    }
}