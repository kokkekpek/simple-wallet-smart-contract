import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'
import config from '../../configs/config'
import Client from '../../library/utils/Client'
import Filer from '../../library/utils/Filer'
import {KeyPair} from '@tonclient/core/dist/modules'
import Keys from '../../library/utils/Keys'
import GiverV2 from '../../library/contracts/GiverV2'
import VariablesForTestInterface from './interfaces/VariablesForTestInterface'

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