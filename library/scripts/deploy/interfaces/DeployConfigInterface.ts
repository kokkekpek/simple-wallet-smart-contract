import NetConfigInterface from '../../../config/NetConfigInterface'

export default interface DeployConfigInterface {
    net: NetConfigInterface
    locale: string | undefined
    keys: string
    requiredForDeployment: number
}