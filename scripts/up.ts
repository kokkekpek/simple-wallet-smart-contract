import {config} from '../config'
import {up} from 'jton'

up({
    node: config.node,
    client: config.net.local.client
}).then().catch((e: any) => console.log(e))