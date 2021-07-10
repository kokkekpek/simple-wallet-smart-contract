import config from '../configs/config'
import SimpleWalletDeployWithGiver from './simpleWallet/SimpleWalletDeployWithGiver'
import {Filer, Net, NetConfigInterface} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const giverKeysFile: string = Filer.getKeys(netConfig.giver, config.contracts.giver.keys)
const deploy: SimpleWalletDeployWithGiver = new SimpleWalletDeployWithGiver({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys,
    requiredForDeployment: config.contracts.simpleWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then()