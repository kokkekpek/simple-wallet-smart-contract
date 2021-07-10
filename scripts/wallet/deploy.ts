import config from '../../configs/config'
import {Filer, Net, NetConfigInterface, SafeMultisigWalletDeployWithGiver} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const giverKeysFile: string = Filer.getKeys(netConfig.giver, config.contracts.giver.keys)
const deploy: SafeMultisigWalletDeployWithGiver = new SafeMultisigWalletDeployWithGiver({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys,
    requiredForDeployment: config.contracts.safeMultisigWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then()