import {root} from '../root'
import {Copy} from 'jton/dist/scripts/copy/Copy'

const copy: Copy = new Copy(`${root}/configs/*`)
copy.run()