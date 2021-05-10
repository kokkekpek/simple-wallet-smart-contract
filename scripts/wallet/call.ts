import config from '../../configs/config'
import WalletSend from '../../library/scripts/wallet/WalletCall'

const call: WalletSend = new WalletSend({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    keysFile: config.net.deploy.keys.wallet,
    locale: config.net.deploy.locale
})
call.run().then()