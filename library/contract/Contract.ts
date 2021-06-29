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
import transferAbi from './abi/transfer.abi.json'
import {AccountTypeEnum} from './enums/AccountTypeEnum'
import Hex from '../utils/Hex'

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
     * @param client {TonClient}
     * @param timeout {number}
     * Examples:
     *     3000
     *     30000
     *     60000
     * @param config {ContractConfigInterface | DeployedContractConfigInterface}
     * Examples:
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
    public constructor(
        client: TonClient,
        timeout: number,
        config: ContractConfigInterface | DeployedContractConfigInterface
    )
    {
        this._client = client
        this._timeout = timeout
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
     *     const client: TonClient = Client.create(config.net.test)
     *     const timeout: number = config.net.test.timeout
     *     const keys: KeyPair = await Keys.random(client)
     *     const root: ArtRoot = new ArtRoot(client, timeout, keys)
     *     const rootAddress: string = await root.address()
     */
    public async address(): Promise<string> {
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
     * Use this if you want to wait for a transaction from one contract to another.
     * Example:
     *     const client: TonClient = Client.create(config.net.test)
     *     const timeout: number = config.net.test.timeout
     *     const sender: SenderContract = new SenderContract(client, timeout)
     *     const receiver: ReceiverContract = new ReceiverContract(client, timeout)
     *
     *     // Deployment here...
     *
     *     const receiverAddress: string = await receiver.address()
     *     await sender.send(receiverAddress, 1_000_000_000)
     *     const waitingResult: boolean = await receiver.waitForTransaction(5000)
     * @param {number} timeout. Time in milliseconds.
     * Examples:
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
                        eq: await this.address()
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
     *     const client: TonClient = Client.create(config.net.test)
     *     const timeout: number = config.net.test.timeout
     *     const keys: KeyPair = await Keys.random(client)
     *     const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, timeout, keys)
     *     const balance: string = await safeMultisigWallet.balance()
     */
    public async balance(): Promise<string> {
        const queryCollectionResult: ResultOfQueryCollection = await this._client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {
                    eq: await this.address()
                }
            },
            result: 'balance, last_trans_lt'
        })
        const result: any[] = queryCollectionResult.result
        if (!result.length)
            return '0x0'

        this._lastTransactionLogicTime = result[0]['last_trans_lt']
        return result[0]['balance']
    }

    /**
     * Return contract account type.
     * Example:
     *     const client: TonClient = Client.create(config.net.test)
     *     const timeout: number = config.net.test.timeout
     *     const keys: KeyPair = await Keys.random(client)
     *     const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, timeout, keys)
     *     const accountType: AccountTypeEnum = await safeMultisigWallet.accountType()
     * @return {Promise<AccountTypeEnum>}
     */
    public async accountType(): Promise<AccountTypeEnum> {
        const queryCollectionResult: ResultOfQueryCollection = await this._client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {
                    eq: await this.address()
                }
            },
            result: 'acc_type, last_trans_lt'
        })
        const result: any[] = queryCollectionResult.result
        if (!result.length)
            return AccountTypeEnum.NOT_FOUND

        this._lastTransactionLogicTime = result[0]['last_trans_lt']
        return result[0]['acc_type']
    }



    /*************
     * PROTECTED *
     *************/
    /**
     * Run method locally.
     * @param method {string} Method name.
     * Example:
     *     'getHistory'
     * @param input {Object}
     * Example:
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
                    eq: await this.address()
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
     * @param method {string} Method name.
     * Example:
     *     'getHistory'
     * @param input {Object}
     * Example:
     *     {
     *         offset: 0,
     *         limit: 10
     *     }
     * @param [keys] {KeyPair} Use if want call contact with another keys. Use this._keys by default.
     * Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
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
                address: await this.address(),
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
     * @param input {Object}
     * Example:
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
                    eq: await this.address()
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
     * @param abi {AbiContract}
     * Example:
     *     {'ABI version': 2, '...'}
     * @param method {string}
     * Example:
     *     'bet'
     * @param input {Object}
     * Example:
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
     * @param comment {string}
     * Example:
     *     'for homeless'
     * @protected
     */
    protected async _getPayloadToTransferWithComment(comment: string = ''): Promise<string> {
        const resultOfEncoding: ResultOfEncodeMessageBody = await this._client.abi.encode_message_body({
            abi: Contract._getAbi(transferAbi),
            signer: {
                type: 'None'
            },
            call_set: {
                function_name: 'transfer',
                input: {
                    comment: Hex.string(comment)
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