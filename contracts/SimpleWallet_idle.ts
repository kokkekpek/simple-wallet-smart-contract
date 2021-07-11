import SimpleWalletV2Contract from './SimpleWallet_idle/SimpleWallet_idle'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract} from 'jton'

export class SimpleWallet_idle extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair, address: string) {
        super(client, timeout, {
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