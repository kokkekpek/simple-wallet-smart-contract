import {SimpleWalletInfo} from '../../src/scripts/SimpleWalletInfo'
import {config} from '../../config'
import {getNetConfig, NetConfig} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const info: SimpleWalletInfo = new SimpleWalletInfo({
    client: netConfig.client,
    keys: config.contracts.simpleWallet.keys
})
info.run().then().catch((e: any) => console.log(e))