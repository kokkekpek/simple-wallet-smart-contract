import {TonClient} from '@tonclient/core'
import {GiverV2} from 'jton'

export default interface TestKit {
    client: TonClient
    timeout: number
    giver: GiverV2
}