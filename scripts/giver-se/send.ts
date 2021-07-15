import {config} from '../../configs/config'
import {getNetConfig, NetConfig} from 'jton'
import {GiverV2Send} from 'jton-contracts/dist/tonlabs/GiverV2/scripts/GiverV2Send'

const netConfig: NetConfig = getNetConfig(config)
const call: GiverV2Send = new GiverV2Send({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se
})
call.run().then().catch((e: any) => console.log(e)).catch((e: any) => console.log(e))

