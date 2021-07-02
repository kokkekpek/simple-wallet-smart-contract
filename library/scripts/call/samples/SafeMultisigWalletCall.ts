import Call from '../Call'
import CallConfigInterface from '../interfaces/CallConfigInterface'
import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'
import Contract from '../../../contract/Contract'
import {StringMap} from '../../../types/StringMap'
import {GiverSendEnum} from './GiverSendEnum'
import readInt from '../readers/readInt'
import readBoolean from '../readers/readBoolean'
import SafeMultisigWallet from '../../../contracts/SafeMultisigWallet'
import fs from 'fs'
import {SafeMultisigWalletCallEnum} from './SafeMultisigWalletCallEnum'

export default class SafeMultisigWalletCall extends Call {
    /**
     * @param config {InfoConfigInterface}
     * Example:
     *     {
     *         net: {
     *             url: 'http://localhost',
     *             timeout: 30_000
     *         },
     *         locale: 'EN',
     *         keys: `${__dirname}/../library/keys/GiverV2.se.keys.json`
     *     }
     */
    public constructor(config: CallConfigInterface) {
        super(config, Object.values(SafeMultisigWalletCallEnum))
    }

    /**
     * Create and return contract object.
     * @param keys {KeyPair}
     * Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
     * @protected
     * @return {Contract}
     */
    protected _getContract(keys: KeyPair): Contract {
        return new SafeMultisigWallet(this._client, this._config.net.timeout, keys)
    }

    /**
     * Create and return target contract object.
     * @param map {StringMap}
     * Example:
     *     {
     *         address: '0x1111222233334444555566667777888899990000aaaabbbbccccddddeeeeffff'
     *     }
     * @protected
     * @return {Contract}
     */
    protected _getTargetContract(map: StringMap): Contract {
        return new Contract(this._client, this._config.net.timeout,{
            abi: {},
            address: map[GiverSendEnum.ADDRESS]
        })
    }

    /**
     * Call the public method with an external message.
     * @param contract {Contract} A contract on which we call the public method with an external message.
     * @param keys {KeyPair}
     * Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
     * @param map {StringMap}
     * Example:
     *     {
     *         address: '0x123... ',
     *         value: '1_000_000_000',
     *         bounce: 'false'
     *     }
     * @protected
     * @return {Promise<void>}
     */
    protected async _call(contract: SafeMultisigWallet, keys: KeyPair, map: StringMap): Promise<void> {
        const address: string = map[SafeMultisigWalletCallEnum.ADDRESS]
        const value: number = readInt(map[SafeMultisigWalletCallEnum.VALUE])
        const bounce: boolean = readBoolean(map[SafeMultisigWalletCallEnum.BOUNCE])
        const flags: number = readInt(map[SafeMultisigWalletCallEnum.FLAGS])
        const pathToAbi: string = map[SafeMultisigWalletCallEnum.PATH_TO_ABI]
        const method: string = map[SafeMultisigWalletCallEnum.METHOD]
        const parameters: string = map[SafeMultisigWalletCallEnum.PARAMETERS]
        const input: Object = JSON.parse(parameters)
        const text: string = fs.readFileSync(pathToAbi, { encoding: 'utf8'})
        const abi: AbiContract = JSON.parse(text)
        await contract.callAnotherContract(address, value, bounce, flags, abi, method, input, keys)
    }
}