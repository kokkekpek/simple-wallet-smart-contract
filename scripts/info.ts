import SimpleWalletInfo from './simpleWallet/SimpleWalletInfo'
import config from '../configs/config'
import {getNetConfig, NetConfig} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const info: SimpleWalletInfo = new SimpleWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys
})
info.run().then().catch((e: any) => console.log(e))