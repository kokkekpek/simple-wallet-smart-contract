import {TonClient} from '@tonclient/core'
import NetworkConfigInterface from './interfaces/NetworkConfigInterface'

export default class Client {
    /**
     * Creates client.
     * @param config {NetworkConfigInterface} Example:
     *     {
     *         url: 'http://localhost',
     *         port: '8080'
     *     }
     * @return {TonClient}
     * @param config
     */
    public static create(config: NetworkConfigInterface): TonClient {
        return new TonClient({
            network: {
                server_address: `${config.url}:${config.port}`
            }
        })
    }
}