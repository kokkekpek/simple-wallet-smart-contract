import {AccountTypeEnum} from '../../../ton/base/enums/AccountTypeEnum'
import colors from 'colors'
import Contract from '../../../ton/base/Contract'

/**
 * Run commands. Output into terminal. Return true if can deploy.
 * @param contract {Contract}
 * @return {Promise<boolean>}
 */
export default async function(contract: Contract): Promise<boolean> {
    const contractType: AccountTypeEnum = await contract.getAccountType()

    if (contractType === AccountTypeEnum.ACTIVE) {
        console.error(colors.green(`ALREADY DEPLOYED`))
        return false
    }
    else if (contractType !== AccountTypeEnum.UN_INIT) {
        console.error(colors.red(`INVALID ACCOUNT TYPE: ${contractType}`))
        return false
    }

    console.log('DEPLOYING...')
    return true
}