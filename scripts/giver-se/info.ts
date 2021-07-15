import {config} from '../../configs/config'
import {getNetConfig, NetConfig} from 'jton'
import {GiverV2Info} from 'jton-contracts/dist/tonlabs/GiverV2/scripts/GiverV2Info'

const netConfig: NetConfig = getNetConfig(config)
const info: GiverV2Info = new GiverV2Info({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se
})
info.run().then().catch((e: any) => console.log(e))