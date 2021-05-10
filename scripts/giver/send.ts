import config from '../../configs/config'
import GiverSend from '../../library/scripts/giver/GiverSend'

const send: GiverSend = new GiverSend({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    keysFile: config.net.deploy.keys.giver,
    locale: config.net.deploy.locale
})
send.run().then()