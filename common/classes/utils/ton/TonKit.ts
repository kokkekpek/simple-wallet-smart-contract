import {TonClient} from '@tonclient/core'
import KitInterface from '../interface/KitInterface'
import KitConfigInterface from '../interface/KitConfigInterface'

export default class TonKit {
    /**
     * Creates client
     * @param config {KitConfigInterface} Example:
     *     {
     *         url: 'http://localhost:8080'
     *         timeout: 3000
     *     }
     * @return {KitInterface}
     */
    public getKit(config: KitConfigInterface): KitInterface {
        return {
            client: new TonClient({
                network: {
                    server_address: `${config.url}:${config.port}`
                }
            }),
            timeout: config.timeout
        }
    }
}