import Contract from './base/Contract'
import SimpleWalletV2Contract from '../../common/contracts/SimpleWalletV2/SimpleWalletV2'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from './utils/interface/KitInterface'

export default class SimpleWallet extends Contract {
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