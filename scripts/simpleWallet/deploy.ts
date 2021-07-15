import {config} from '../../configs/config'
import {getKeysByName, getNetConfig, NetConfig} from 'jton'
import {SimpleWalletDeployWithGiverV2} from '../../src/scripts/SimpleWalletDeployWithGiverV2'

const netConfig: NetConfig = getNetConfig(config)
const giverKeysFile: string = getKeysByName(config.contracts.giver.keys, netConfig.giver)
const deploy: SimpleWalletDeployWithGiverV2 = new SimpleWalletDeployWithGiverV2({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys,
    requiredForDeployment: config.contracts.simpleWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then().catch((e: any) => console.log(e))