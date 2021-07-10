import SimpleWalletInfo from './simpleWallet/SimpleWalletInfo'
import config from '../configs/config'
import {Net, NetConfigInterface} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const info: SimpleWalletInfo = new SimpleWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys
})
info.run().then()