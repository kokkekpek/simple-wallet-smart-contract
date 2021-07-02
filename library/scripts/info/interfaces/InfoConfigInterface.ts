import NetConfigInterface from '../../../config/NetConfigInterface'

export default interface InfoConfigInterface {
    net: NetConfigInterface
    locale: string | undefined
    keys: string
}