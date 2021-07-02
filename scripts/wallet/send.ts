import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'
import SafeMultisigWalletSend from '../../library/scripts/call/samples/SafeMultisigWalletSend'

const netConfig: NetConfigInterface = Net.getConfig(config)
const call: SafeMultisigWalletSend = new SafeMultisigWalletSend({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then()

