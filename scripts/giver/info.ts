import GiverInfo from '../../library/scripts/giver/GiverInfo'
import config from '../../configs/config'

const info: GiverInfo = new GiverInfo({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    keysFile: config.net.deploy.keys.giver,
    locale: config.net.deploy.locale
})
info.run().then()