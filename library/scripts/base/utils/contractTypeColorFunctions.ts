import colors from 'colors'
import { AccountTypeEnum } from '../../../ton/base/enums/AccountTypeEnum'
import ColorFunctionInterface from '../interfaces/ColorFunctionInterface'

const contractTypeColorFunctions: {[key: string]: ColorFunctionInterface} = {}
contractTypeColorFunctions[AccountTypeEnum.NOT_FOUND] = colors.gray
contractTypeColorFunctions[AccountTypeEnum.UN_INIT] = colors.yellow
contractTypeColorFunctions[AccountTypeEnum.ACTIVE] = colors.green
contractTypeColorFunctions[AccountTypeEnum.FROZEN] = colors.blue
contractTypeColorFunctions[AccountTypeEnum.NON_EXIST] = colors.red
export default contractTypeColorFunctions