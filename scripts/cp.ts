import {copy} from 'jton'
import {root} from '../root'

copy({
    source: `${root}/config/*`,
    words: 'example'
}).catch((e: any) => console.log(e))