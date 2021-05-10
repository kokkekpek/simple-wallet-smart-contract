import {TonClient} from '@tonclient/core'

export default interface KitInterface {
    client: TonClient
    timeout: number
}