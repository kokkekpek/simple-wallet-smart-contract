import SimpleWalletInfo from './simpleWallet/SimpleWalletInfo'
import config from '../configs/config'
import NetConfigInterface from '../library/config/NetConfigInterface'
import Net from '../library/utils/Net'

const netConfig: NetConfigInterface = Net.getConfig(config)
const info: SimpleWalletInfo = new SimpleWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys
})
info.run().then()