import {
    Abi,
    AbiContract,
    DecodedMessageBody,
    KeyPair,
    ResultOfEncodeMessage,
    ResultOfEncodeMessageBody,
    ResultOfProcessMessage,
    ResultOfQueryCollection,
    ResultOfRunTvm,
    ResultOfWaitForCollection
} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import ContractConfigInterface from './interfaces/ContractConfigInterface'
import DeployedContractConfigInterface from './interfaces/DeployedContractConfigInterface'
import KitInterface from '../utils/interfaces/KitInterface'
import Ton from '../utils/Ton'
import abi from './abi/transfer.abi.json'
import {AccountTypeEnum} from './enums/AccountTypeEnum'

export default class Contract {
    private readonly _client: TonClient
    private readonly _timeout: number
    private readonly _abi: Abi
    private readonly _initialData: Object
    private readonly _keys: KeyPair
    private readonly _tvc: string
    private _address: string
    private _lastTransactionLogicTime: number



    /**********
     * PUBLIC *
     **********/
    /**
     * @param kit {KitInterface} Example:
     *     {
     *         url: 'http://localhost:8080'
     *         timeout: 3000
     *     }
     * @param config {ContractConfigInterface | DeployedContractConfigInterface} Examples:
     *     // Already deployment contract
     *     {
     *         abi: {'ABI version': 2, '...'}
     *         address: '0:7777777777777777777777777777777777777777777777777777777777777777'
     *     }
     *
     *     // New contract
     *     {
     *         abi: {'ABI version': 2, '...'}
     *         initialData: {name: 'bot'}
     *         keys: {public: '...', secret: '...'}
     *         tvc: 'te6ccg...'
     *     }
     */
    public constructor(kit: KitInterface, config: ContractConfigInterface | DeployedContractConfigInterface) {
        this._client = kit.client
        this._timeout = kit.timeout
        this._abi = Contract._getAbi(config.abi)
        this._initialData = config.initialData
        this._tvc = config.tvc
        this._keys = config.keys
        this._address = config.address
        this._lastTransactionLogicTime = 0
    }

    /**
     * Called once. Use if you want to know the address of the contract before deployment.
     * Example:
     *     const kit: KitInterface = Ton.kit.getKit(config.net.test)
     *     const keys: KeyPair = await Ton.keys.random(kit.client)
     *     const root: ArtRoot = new ArtRoot(kit, keys)
     *     const rootAddress: string = await root.calculateAddress()
     */
    public async calculateAddress(): Promise<string> {
        if (this._address)
            return this._address

        const encodedMessage: ResultOfEncodeMessage = await this._client.abi.encode_message({
            abi: this._abi,
            signer: {
                type: 'Keys',
                keys: this._keys
            },
            deploy_set: {
                tvc: this._tvc,
                initial_data: this._initialData
            }
        })
        return this._address = encodedMessage.address
    }

    /**
     * Use this if you want to wait for a transaction from one contract to another. Example:
     *     const kit: KitInterface = Ton.kit.getKit(config.net.test)
     *     const sender: SenderContract = new SenderContract(kit)
     *     const receiver: ReceiverContract = new ReceiverContract(kit)
     *
     *     // Deployment here...
     *
     *     const receiverAddress: string = await receiver.calculateAddress()
     *     await sender.send(receiverAddress, 1000000000)
     *     const waitingResult: boolean = await receiver.waitForTransaction(5000)
     * @param {number} timeout. Time in milliseconds. Examples:
     *     3000
     *     5000
     */
    public async waitForTransaction(timeout?: number): Promise<boolean> {
        timeout = timeout ?? this._timeout
        try {
            const queryCollectionResult: ResultOfQueryCollection = await this._client.net.wait_for_collection({
                collection: 'accounts',
                filter: {
                    id: {
                        eq: await this.calculateAddress()
                    },
                    last_trans_lt: {
                        gt: this._lastTransactionLogicTime.toString()
                    }
                },
                result: 'last_trans_lt',
                timeout: timeout
            })
            this._lastTransactionLogicTime = queryCollectionResult.result['last_trans_lt']
            return true
        } catch (error: any) {
            return false
        }
    }

    /**
     * Return contract balance.
     * Example:
     *     const kit: KitInterface = Ton.kit.getKit(config.net.test)
     *     const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(kit, await Ton.keys.random(kit.client))
     *     const balance: string = await safeMultisigWallet.getBalance()
     */
    public async getBalance(): Promise<string> {
        const queryCollectionResult: ResultOfQueryCollection = await this._client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {
                    eq: await this.calculateAddress()
                }
            },
            result: 'balance'
        })
        const result: any[] = queryCollectionResult.result
        return result.length ? result[0]['balance'] : '0x0'
    }

    /**
     * Return contract account type.
     * Example:
     *     const kit: KitInterface = Ton.kit.getKit(config.net.test)
     *     const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(kit, await Ton.keys.random(kit.client))
     *     const accountType: AccountTypeEnum = await safeMultisigWallet.getAccountType()
     * @return {Promise<AccountTypeEnum>}
     */
    public async getAccountType(): Promise<AccountTypeEnum> {
        const queryCollectionResult: ResultOfQueryCollection = await this._client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {
                    eq: await this.calculateAddress()
                }
            },
            result: 'acc_type'
        })
        const result: any[] = queryCollectionResult.result
        return result.length ? result[0]['acc_type'] : -1
    }



    /*************
     * PROTECTED *
     *************/
    /**
     * Run method locally.
     * @param method {string} Method name. Example:
     *     'getHistory'
     * @param input {Object} Example:
     *     {
     *         offset: 0,
     *         limit: 10
     *     }
     * @protected
     */
    protected async _run(method: string, input: Object = {}): Promise<DecodedMessageBody> {
        //////////////
        // Read boc //
        //////////////
        const queryCollectionResult: ResultOfQueryCollection = await this._client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {
                    eq: await this.calculateAddress()
                }
            },
            result: 'boc'
        })
        const account: string = queryCollectionResult.result[0]['boc']

        /////////
        // Run //
        /////////
        const encodedMessage: ResultOfEncodeMessage = await this._client.abi.encode_message({
            abi: this._abi,
            signer: {
                type: 'None'
            },
            call_set: {
                function_name: method,
                input: input
            },
            address: this._address
        })
        const message: ResultOfRunTvm = await this._client.tvm.run_tvm({
            message: encodedMessage.message,
            account: account
        })

        ///////////////////
        // Decode result //
        ///////////////////
        const outMessages: string = message.out_messages[0]
        return await this._client.abi.decode_message({
            abi: this._abi,
            message: outMessages
        })
    }

    /**
     * External call.
     * @param method {string} Method name. Example:
     *     'getHistory'
     * @param input {Object} Example:
     *     {
     *         offset: 0,
     *         limit: 10
     *     }
     * @param [keys] {KeyPair} Use if want call contact with another keys. Use this._keys by default.
     * @protected
     */
    protected async _call(method: string, input: Object = {}, keys?: KeyPair): Promise<ResultOfProcessMessage> {
        const keysPair: KeyPair = keys ?? this._keys
        const processMessageResult: ResultOfProcessMessage = await this._client.processing.process_message({
            message_encode_params: {
                abi: this._abi,
                signer: {
                    type: 'Keys',
                    keys: keysPair
                },
                address: await this.calculateAddress(),
                call_set: {
                    function_name: method,
                    input: input
                }
            },
            send_events: false
        })
        await this.waitForTransaction()
        return processMessageResult
    }

    /**
     * Deploy.
     * @param input {Object} Example:
     *     {
     *         count: 500
     *     }
     * @protected
     */
    protected async _deploy(input: Object = {}): Promise<boolean> {
        /////////////////////////////
        // Waiting for balance > 0 //
        /////////////////////////////
        const waitingNoCodeCollectionResult: ResultOfWaitForCollection = await this._client.net.wait_for_collection({
            collection: 'accounts',
            filter: {
                id: {
                    eq: await this.calculateAddress()
                },
                data: {
                    eq: null
                },
                code: {
                    eq: null
                },
                balance: {
                    gt: '0'
                }
            },
            result: 'last_trans_lt'
        })
        this._lastTransactionLogicTime = waitingNoCodeCollectionResult.result['last_trans_lt']

        ////////////
        // Deploy //
        ////////////
        const encodedMessage: ResultOfEncodeMessage = await this._client.abi.encode_message({
            abi: this._abi,
            signer: {
                type: 'Keys',
                keys: this._keys
            },
            deploy_set: {
                tvc: this._tvc,
                initial_data: this._initialData
            },
            call_set: {
                function_name: 'constructor',
                input: input
            }
        })
        await this._client.processing.send_message({
            message: encodedMessage.message,
            send_events: false
        })

        ////////////////////////////////////////
        // Waiting for deployment transaction //
        ////////////////////////////////////////
        return await this.waitForTransaction()
    }

    /**
     * Generate payload message for internal call.
     * @param abi {AbiContract} Example:
     *     {'ABI version': 2, '...'}
     * @param method {string} Example:
     *     'bet'
     * @param input {Object} Example:
     *     {
     *         value: 1_000_000_000,
     *         luckyNumber: 50
     *     }
     * @protected
     */
    protected async _getPayloadToCallAnotherContract(
        abi: AbiContract,
        method: string,
        input: Object = {}
    ): Promise<string> {
        const resultOfEncoding: ResultOfEncodeMessageBody = await this._client.abi.encode_message_body({
            abi: Contract._getAbi(abi),
            signer: {
                type: 'None'
            },
            call_set: {
                function_name: method,
                input: input
            },
            is_internal: true
        })
        return resultOfEncoding.body
    }

    /**
     * Generate payload message with comment for transfer.
     * @param comment {string} Example:
     *     'for homeless'
     * @protected
     */
    protected async _getPayloadToTransferWithComment(comment: string = ''): Promise<string> {
        const resultOfEncoding: ResultOfEncodeMessageBody = await this._client.abi.encode_message_body({
            abi: Contract._getAbi(abi),
            signer: {
                type: 'None'
            },
            call_set: {
                function_name: 'transfer',
                input: {
                    comment: Ton.hex.string(comment)
                }
            },
            is_internal: true
        })
        return resultOfEncoding.body
    }



    /***********
     * PRIVATE *
     ***********/
    private static _getAbi(abi: AbiContract): Abi {
        return {
            type: 'Contract',
            value: abi
        }
    }
}