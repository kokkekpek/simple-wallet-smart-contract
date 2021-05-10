import {AccountTypeEnum} from '../../../ton/base/enums/AccountTypeEnum'

const contractTypes: { [key: string]: string } = {}
contractTypes[AccountTypeEnum.NOT_FOUND] = 'Not found'
contractTypes[AccountTypeEnum.UN_INIT] = 'Un init'
contractTypes[AccountTypeEnum.ACTIVE] = 'Active'
contractTypes[AccountTypeEnum.FROZEN] = 'Frozen'
contractTypes[AccountTypeEnum.NON_EXIST] = 'Non exist'
export default contractTypes