import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'

export default interface ContractConfigInterface {
    abi: AbiContract | Object
    initialData: Object
    keys: KeyPair
    tvc: string
    address?: string
}