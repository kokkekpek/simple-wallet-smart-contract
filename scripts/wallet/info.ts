import config from '../../configs/config'
import {getNetConfig, NetConfig, SafeMultisigWalletInfo} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const info: SafeMultisigWalletInfo = new SafeMultisigWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
info.run().then().catch((e: any) => console.log(e))