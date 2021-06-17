import SafeMultisigWalletInfo from '../../library/scripts/info/samples/SafeMultisigWalletInfo'
import config from '../../configs/config'

const info: SafeMultisigWalletInfo = new SafeMultisigWalletInfo(
    {
        url: config.net.deploy.url,
        port: config.net.deploy.port,
        timeout: config.net.deploy.timeout,
        locale: config.locale,
        keys: config.net.deploy.contracts.giver.keys
    })
info.run().then()