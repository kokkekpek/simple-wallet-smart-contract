import {config} from '../../configs/config'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TestKit} from './TestKit'
import {createClient, filterKey, getNetConfig, GiverV2, NetConfig, readKeyFile} from 'jton'

export function prepareTest(): TestKit {
    TonClient.useBinaryLibrary(libNode)
    const netConfig: NetConfig = getNetConfig(config)
    const client: TonClient = createClient(netConfig.url)
    const timeout: number = netConfig.timeout
    const giverKeysFile: string = filterKey(netConfig.giver, config.contracts.giver.keys)
    const giverKeys: KeyPair = readKeyFile(giverKeysFile)
    const giver: GiverV2 = new GiverV2(client, timeout, giverKeys)
    return {
        client: client,
        timeout: timeout,
        giver: giver
    }
}