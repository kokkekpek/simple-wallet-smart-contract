import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'
import GiverSend from '../../library/scripts/call/samples/GiverSend'

const netConfig: NetConfigInterface = Net.getConfig(config)
const call: GiverSend = new GiverSend({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.dev
})
call.run().then()

