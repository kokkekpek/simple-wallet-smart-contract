import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import Contract from '../base/Contract'
import GiverV2Contract from './GiverV2/GiverV2'
import {TonClient} from '@tonclient/core'

export default class GiverV2 extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: GiverV2Contract.abi,
            initialData: {},
            keys: keys,
            tvc: GiverV2Contract.tvc
        })
    }



    /**********
     * DEPLOY *
     **********/
    public async deploy(): Promise<boolean> {
        return await this._deploy({})
    }



    /**********
     * PUBLIC *
     **********/
    public sendTransaction(dest: string, value: number, bounce: boolean = false): Promise<ResultOfProcessMessage> {
        return this._call('sendTransaction', {
            dest: dest,
            value: value,
            bounce: bounce
        })
    }
}