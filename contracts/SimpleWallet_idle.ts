import Contract from '../library/ton/base/Contract'
import SimpleWalletV2Contract from './SimpleWallet_idle/SimpleWallet_idle'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'

export default class SimpleWallet_idle extends Contract {
    public constructor(kit: KitInterface, keys: KeyPair, address: string,) {
        super(kit, {
            abi: SimpleWalletV2Contract.abi,
            keys: keys,
            address: address
        })
    }



    /***********
     * GETTERS *
     ***********/
    public async getVersion(): Promise<string> {
        const result: DecodedMessageBody = await this._run('getVersion')
        return result.value['version']
    }
}