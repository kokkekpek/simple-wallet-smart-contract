import {config} from '../../config'
import {getNetConfig, NetConfig} from 'jton'
import {SafeMultisigWalletSend} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const netConfig: NetConfig = getNetConfig(config)
const call: SafeMultisigWalletSend = new SafeMultisigWalletSend({
    client: netConfig.client,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then().catch((e: any) => console.log(e))

