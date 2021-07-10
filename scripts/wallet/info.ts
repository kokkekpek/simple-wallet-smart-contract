import config from '../../configs/config'
import {Net, NetConfigInterface, SafeMultisigWalletInfo} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const info: SafeMultisigWalletInfo = new SafeMultisigWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
info.run().then()