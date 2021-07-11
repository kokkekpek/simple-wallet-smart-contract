import {config} from '../../configs/config'
import {getNetConfig, GiverSend, NetConfig} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const call: GiverSend = new GiverSend({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se
})
call.run().then().catch((e: any) => console.log(e)).catch((e: any) => console.log(e))

