import {config} from '../configs/config'
import {up} from 'jton'

up({
    node: config.node,
    net: config.net.local
}).then().catch((e: any) => console.log(e))