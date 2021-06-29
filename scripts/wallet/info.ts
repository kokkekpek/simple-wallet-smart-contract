import SafeMultisigWalletInfo from '../../library/scripts/info/samples/SafeMultisigWalletInfo'
import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'

const netConfig: NetConfigInterface = Net.getConfig(config)
const info: SafeMultisigWalletInfo = new SafeMultisigWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
info.run().then()