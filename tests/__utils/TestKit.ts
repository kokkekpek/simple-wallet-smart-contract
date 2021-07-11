import {TonClient} from '@tonclient/core'
import {GiverV2} from 'jton'

export interface TestKit {
    client: TonClient
    timeout: number
    giver: GiverV2
}