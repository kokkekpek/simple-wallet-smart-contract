import DeployConfigInterface from './DeployConfigInterface'

export default interface DeployWithGiverConfigInterface extends DeployConfigInterface {
    giverKeys: string
}