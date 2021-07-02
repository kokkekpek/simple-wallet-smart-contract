import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'
import SafeMultisigWalletCall from '../../library/scripts/call/samples/SafeMultisigWalletCall'

const netConfig: NetConfigInterface = Net.getConfig(config)
const call: SafeMultisigWalletCall = new SafeMultisigWalletCall({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then()

