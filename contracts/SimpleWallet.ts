import Contract from '../library/contract/Contract'
import SimpleWalletContract from './SimpleWallet/SimpleWallet'
import {AbiContract, DecodedMessageBody, KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'

export default class SimpleWallet extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: SimpleWalletContract.abi,
            tvc: SimpleWalletContract.tvc,
            initialData: {},
            keys: keys
        })
    }



    /**********
     * DEPLOY *
     **********/
    public async deploy(): Promise<boolean> {
        return await this._deploy()
    }



    /**********
     * PUBLIC *
     **********/
    public async changeOwner(owner: string): Promise<ResultOfProcessMessage> {
        return await this._call('changeOwner', {owner: owner})
    }

    public async upgrade(code: string): Promise<ResultOfProcessMessage> {
        return await this._call('upgrade', {code: code})
    }

    public async callAnotherContract(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        abi: AbiContract,
        method: string,
        input: Object
    ): Promise<ResultOfProcessMessage> {
        const payload: string = await this._getPayloadToCallAnotherContract(abi, method, input)
        return await this.sendTransaction(
            dest,
            value,
            bounce,
            flags,
            payload
        )
    }

    public async sendTransactionWithComment(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        comment: string
    ): Promise<ResultOfProcessMessage> {
        const payload: string = await this._getPayloadToTransferWithComment(comment)
        return await this.sendTransaction(
            dest,
            value,
            bounce,
            flags,
            payload
        )
    }

    public async sendTransaction(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        payload: string
    ): Promise<ResultOfProcessMessage> {
        return await this._call('sendTransaction', {
            dest: dest,
            value: value,
            bounce: bounce,
            flags: flags,
            payload: payload
        })
    }



    /***********
     * GETTERS *
     ***********/
    public async getOwner(): Promise<string> {
        const result: DecodedMessageBody = await this._run('getOwner')
        return result.value['owner']
    }
}