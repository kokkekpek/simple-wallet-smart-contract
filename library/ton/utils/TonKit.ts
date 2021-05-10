import {TonClient} from '@tonclient/core'
import KitInterface from './interfaces/KitInterface'
import KitConfigInterface from './interfaces/KitConfigInterface'
import KitClientConfigInterface from './interfaces/KitClientConfigInterface'

export default class TonKit {
    /**
     * Creates kit.
     * @param config {KitConfigInterface} Example:
     *     {
     *         url: 'http://localhost:8080',
     *         port: '8080',
     *         timeout: 3000
     *     }
     * @return {KitInterface}
     */
    public create(config: KitConfigInterface): KitInterface {
        return {
            client: this.createClient(config),
            timeout: config.timeout
        }
    }


    /**
     * Creates client.
     * @param config {KitClientConfigInterface} Example:
     *     {
     *         url: 'http://localhost:8080',
     *         port: '8080'
     *     }
     * @return {TonClient}
     * @param config
     */
    public createClient(config: KitClientConfigInterface): TonClient {
        return new TonClient({
            network: {
                server_address: `${config.url}:${config.port}`
            }
        })
    }
}