import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import Client from '../../utils/Client'
import InfoConfigInterface from './interfaces/InfoConfigInterface'
import Contract from '../../contract/Contract'
import transferAbi from '../../contract/abi/transfer.abi.json'
import {KeyPair} from '@tonclient/core/dist/modules'
import Keys from '../../utils/Keys'
import Printer from '../../printer/Printer'

export default class Info {
    protected readonly _config: InfoConfigInterface
    protected readonly _client: TonClient

    /**
     * @param config {InfoConfigInterface} Example:
     *     {
     *             url: 'http://localhost',
     *             port: '8080',
     *             timeout: 30000,
     *             locale: 'EN',
     *             keys: __dirname + '/../library/keys/GiverV2.se.keys.json'
     *     }
     */
    constructor(config: InfoConfigInterface) {
        TonClient.useBinaryLibrary(libNode)
        this._config = config
        this._client = Client.create(config)
    }

    /**
     * Execute script.
     */
    async run() {
        const printer: Printer = new Printer(this._config.locale)
        const keys: KeyPair = await Keys.createRandomIfNotExist(
            this._config.keys,
            this._client
        )
        const contract: Contract = this._getContract(keys)
        printer.network(this._config)
        await printer.account(contract)
        this._client.close()
    }

    /**
     * Create and return contract object.
     * @param keys {KeyPair} Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
     * @protected
     * @return {Contract}
     */
    protected _getContract(keys: KeyPair): Contract {
        return new Contract(this._client, this._config.timeout, {
            abi: transferAbi,
            keys: keys,
            address: '0x0000000000000000000000000000000000000000000000000000000000000000'
        })
    }
}