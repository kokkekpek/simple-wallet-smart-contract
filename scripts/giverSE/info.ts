import GiverV2Info from '../../library/scripts/info/samples/GiverV2Info'
import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'

const netConfig: NetConfigInterface = Net.getConfig(config)
const info: GiverV2Info = new GiverV2Info({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se
})
info.run().then()