import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../../configs/config'
import {KeyPair} from '@tonclient/core/dist/modules'
import VariablesForTestInterface from './interfaces/VariablesForTestInterface'
import {Client, Filer, GiverV2, Keys, Net, NetConfigInterface} from 'jton'

export default function prepareTest(): VariablesForTestInterface {
    TonClient.useBinaryLibrary(libNode)
    const netConfig: NetConfigInterface = Net.getConfig(config)
    const client: TonClient = Client.create(netConfig.url)
    const timeout: number = netConfig.timeout
    const giverKeysFile: string = Filer.getKeys(netConfig.giver, config.contracts.giver.keys)
    const giverKeys: KeyPair = Keys.read(giverKeysFile)
    const giver: GiverV2 = new GiverV2(client, timeout, giverKeys)
    return {
        client: client,
        timeout: timeout,
        giver: giver
    }
}