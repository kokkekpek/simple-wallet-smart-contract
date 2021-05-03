import {TonClient} from '@tonclient/core'
import KitInterface from '../interface/KitInterface'
import KitConfig from '../interface/KitConfig'

export default class TonKit {
    /**
     * Creates client
     * @param config {KitConfig} Example:
     *     {
     *         url: 'http://localhost:8080'
     *         timeout: 3000
     *     }
     * @return {TonClient}
     * @param config
     */
    public getKit(config: KitConfig): KitInterface {
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