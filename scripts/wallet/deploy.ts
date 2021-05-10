import config from '../../configs/config'
import WalletDeploy from '../../library/scripts/wallet/WalletDeploy'

const deploy: WalletDeploy = new WalletDeploy({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    keysFile: config.net.deploy.keys.wallet,
    locale: config.net.deploy.locale
})
deploy.run().then()