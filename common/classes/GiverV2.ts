import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import Contract from './base/Contract'
import GiverV2Contract from '../contracts/GiverV2/GiverV2'
import KitInterface from "./utils/interface/KitInterface";

export default class GiverV2 extends Contract {
    public constructor(kit: KitInterface, keys: KeyPair) {
        super(kit, {
            abi: GiverV2Contract.abi,
            initialData: {},
            keys: keys,
            tvc: GiverV2Contract.tvc
        })
    }



    /**********
     * PUBLIC *
     **********/
    public sendTransaction(dest: string, value: number, bounce: boolean = false): Promise<ResultOfProcessMessage> {
        return this._call('sendTransaction', {
            dest: dest,
            value: value,
            bounce: bounce
        })
    }
}