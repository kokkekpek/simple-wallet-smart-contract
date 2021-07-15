import {config} from '../../configs/config'
import {getNetConfig, NetConfig} from 'jton'
import {SafeMultisigWalletInfo} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet/scripts/SafeMultisigWalletInfo'

const netConfig: NetConfig = getNetConfig(config)
const info: SafeMultisigWalletInfo = new SafeMultisigWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
info.run().then().catch((e: any) => console.log(e))