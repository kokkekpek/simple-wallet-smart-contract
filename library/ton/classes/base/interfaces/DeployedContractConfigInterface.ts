import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'

export default interface DeployedContractConfigInterface {
    abi: AbiContract | Object
    initialData?: Object
    keys?: KeyPair
    tvc?: string
    address: string
}