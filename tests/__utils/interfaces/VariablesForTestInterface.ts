import {TonClient} from '@tonclient/core'
import GiverV2 from '../../../library/contracts/GiverV2'

export default interface VariablesForTestInterface {
    client: TonClient
    timeout: number
    giver: GiverV2
}