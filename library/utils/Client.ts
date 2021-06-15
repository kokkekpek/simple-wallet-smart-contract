import {TonClient} from '@tonclient/core'
import ClientConfigInterface from './interfaces/ClientConfigInterface'

export default class Client {
    /**
     * Creates client.
     * @param config {ClientConfigInterface} Example:
     *     {
     *         url: 'http://localhost',
     *         port: '8080'
     *     }
     * @return {TonClient}
     * @param config
     */
    public static create(config: ClientConfigInterface): TonClient {
        return new TonClient({
            network: {
                server_address: `${config.url}:${config.port}`
            }
        })
    }
}