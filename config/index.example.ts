import {node} from './node'
import {net} from './net'
import {contracts} from './contracts'

export const config: any = {
    node: node,
    net: net,
    contracts: contracts,

    /**
     * Default network when no network is specified.
     * Examples:
     *     'local'
     *     'dev'
     */
    defaultNet: 'local',

    /**
     * One or more BCP 47 extension sequences or `undefined`
     * Examples:
     *     'RU'
     *     'EN'
     *     undefined
     */
    locale: undefined
}