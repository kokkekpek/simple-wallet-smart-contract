import config from '../../configs/config'
import {GiverSend, Net, NetConfigInterface} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const call: GiverSend = new GiverSend({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se
})
call.run().then()

