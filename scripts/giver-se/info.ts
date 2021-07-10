import config from '../../configs/config'
import {GiverV2Info, Net, NetConfigInterface} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const info: GiverV2Info = new GiverV2Info({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se
})
info.run().then()