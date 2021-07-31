import {config} from '../../config'
import {getKeysByName, getNetConfig, NetConfig, readKeys, x0} from 'jton'
import {SafeMultisigWalletDeployWithGiverV2} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {KeyPair} from '@tonclient/core/dist/modules'

const netConfig: NetConfig = getNetConfig(config)
const giverKeysFile: string = getKeysByName(config.contracts.giver.keys, netConfig.transactions.giver)
const keys: KeyPair = readKeys(giverKeysFile)
const deploy: SafeMultisigWalletDeployWithGiverV2 = new SafeMultisigWalletDeployWithGiverV2({
    net: netConfig,
    keys: config.contracts.safeMultisigWallet.keys,
    requiredForDeployment: config.contracts.safeMultisigWallet.requiredForDeployment,
    giverKeys: giverKeysFile
}, {
    owners: [x0(keys.public)],
    reqConfirms: 1
})
deploy.run().then().catch((e: any) => console.log(e))