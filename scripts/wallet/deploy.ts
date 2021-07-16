import {config} from '../../configs/config'
import {getKeysByName, getNetConfig, NetConfig} from 'jton'
import {SafeMultisigWalletDeployWithGiverV2} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const netConfig: NetConfig = getNetConfig(config)
const giverKeysFile: string = getKeysByName(config.contracts.giver.keys, netConfig.giver)
const deploy: SafeMultisigWalletDeployWithGiverV2 = new SafeMultisigWalletDeployWithGiverV2({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys,
    requiredForDeployment: config.contracts.safeMultisigWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then().catch((e: any) => console.log(e))