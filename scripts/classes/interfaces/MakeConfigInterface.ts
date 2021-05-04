export default interface MakeConfigInterface {
    compile: string[]
    wrap?: string[]
    compiler: string
    linker: string
    extension?:
        'ts' |
        'js'
    export?:
        'commonjs' |         // CommonJS modules (NodeJs)
        'commonjs-default' | // CommonJS modules (NodeJS) with default export
        'es6' |              // ES6 modules
        'es6-default'        // ES6 modules with default export
}