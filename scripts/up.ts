import config from '../configs/config'
import {Up} from 'jton'

const up: Up = new Up({
    node: config.node,
    net: config.net.local
})
up.run().then()