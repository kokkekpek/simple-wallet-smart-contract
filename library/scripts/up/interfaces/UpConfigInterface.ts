export default interface UpConfigInterface {
    version: string,
    url: string,
    port: string,
    timeout: number,
    dbPort?: string,
    instance?: string
}