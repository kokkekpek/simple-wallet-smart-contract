import NetConfigInterface from '../../../config/NetConfigInterface'

export default interface CallConfigInterface {
    net: NetConfigInterface
    locale: string | undefined
    keys: string
}