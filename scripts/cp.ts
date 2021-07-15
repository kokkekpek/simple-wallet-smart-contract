import {copy} from 'jton'
import {root} from '../root'

copy({
    source: `${root}/configs/*`,
    words: 'example'
}).catch((e: any) => console.log(e))