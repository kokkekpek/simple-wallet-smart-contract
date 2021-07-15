import SimpleWalletContract from './contract/SimpleWallet'
import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract, ResultOfCall} from 'jton'

export {SimpleWalletContract}

export interface ChangeOwnerIn {
    owner: string
}

export interface SendTransactionIn {
    dest: string
    value: number
    bounce: boolean
    flags: number
    payload: string
}

export interface UpgradeIn {
    code: string
}

export interface GetOwnerOut {
    owner: string
}

export class SimpleWallet extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: SimpleWalletContract.abi,
            tvc: SimpleWalletContract.tvc,
            initialData: {},
            keys: keys
        })
    }

    /**************
     * DECORATORS *
     **************/
    public async callAnotherContract(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        abi: AbiContract,
        method: string,
        input: Object,
        keys?: KeyPair
    ): Promise<ResultOfCall> {
        const payload: string = await this._getPayloadToCallAnotherContract(abi, method, input)
        return await this.sendTransaction({
                dest,
                value,
                bounce,
                flags,
                payload
            },
            keys
        )
    }

    public async sendTransactionWithComment(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        comment: string,
        keys?: KeyPair
    ): Promise<ResultOfCall> {
        const payload: string = await this._getPayloadToTransferWithComment(comment)
        return await this.sendTransaction({
                dest,
                value,
                bounce,
                flags,
                payload
            },
            keys
        )
    }


    /**********
     * PUBLIC *
     **********/
    public async changeOwner(input: ChangeOwnerIn): Promise<ResultOfCall> {
        return await this.call('changeOwner', input)
    }

    public async sendTransaction(input: SendTransactionIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('sendTransaction', input, keys)
    }

    public async upgrade(input: UpgradeIn): Promise<ResultOfCall> {
        return await this.call('upgrade', input)
    }


    /***********
     * GETTERS *
     ***********/
    public async getOwner(): Promise<GetOwnerOut> {
        return (await this.run('getOwner')).value
    }
}