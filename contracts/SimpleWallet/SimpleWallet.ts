const SimpleWalletContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint16"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "upgrade",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getOwner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECGwEAAw4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBgUEAAACkiHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4d+EMhuSCfMCD4I4ED6KiCCBt3QKC53pMg+GPg8jTYMNMfAds8+Edu8nwMBwE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwHAiggghBotV8/u+MCIIIQfxH717rjAgoIAmIw+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/XDQ+V1NHQ0w/f1NHbPOMAf/hnCRoBXIj4RSBukjBw3vhCuvLoZPgAVHNCyM+FgMoAc89AzgH6AnHPC2ohzxTJIvsAXwUVBFAgghAVvCVCuuMCIIIQFyMMOrrjAiCCEEkcPmS64wIgghBotV8/uuMCEg8NCwRcMPhIbuMA+Ebyc3H4ZtGI+EUgbpIwcN74Qrry6GT4QoghwwDy6GX4ADDbPH/4ZwwVFBoAau1E0CDXScIBjhDT/9M/0wDRf/ho+Gb4Y/hijhj0BXABgED0DvK91wv/+GJw+GNw+GZ/+GjiA3gw+Ehu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMkcPmSM8Wy//JcPsAkTDi4wB/+GcWDhoABPhCAhQw1NHbPOMAf/hnEBoCWoj4RSBukjBw3vhCuvLoZPgAIPsEINAgizits1jHBZPXTdDe10zQ7R7tU9s8MBURAATwAgMgMPhIbuMA0//R2zzbPH/4ZxYTGgI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhUUAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACbtRNDT/9M/0wDRf/ho+Gb4Y/hiAgr0pCD0oRkYABRzb2wgMC40NS4wARagAAAAAts8+A/yABoAIPhG+EP4QsjL/8s/ywDJ7VQ=",
    code: "te6ccgECGAEAAuEABCSK7VMg4wMgwP/jAiDA/uMC8gsUAwIBAAACkiHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4d+EMhuSCfMCD4I4ED6KiCCBt3QKC53pMg+GPg8jTYMNMfAds8+Edu8nwJBAE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwEAiggghBotV8/u+MCIIIQfxH717rjAgcFAmIw+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/XDQ+V1NHQ0w/f1NHbPOMAf/hnBhcBXIj4RSBukjBw3vhCuvLoZPgAVHNCyM+FgMoAc89AzgH6AnHPC2ohzxTJIvsAXwUSBFAgghAVvCVCuuMCIIIQFyMMOrrjAiCCEEkcPmS64wIgghBotV8/uuMCDwwKCARcMPhIbuMA+Ebyc3H4ZtGI+EUgbpIwcN74Qrry6GT4QoghwwDy6GX4ADDbPH/4ZwkSERcAau1E0CDXScIBjhDT/9M/0wDRf/ho+Gb4Y/hijhj0BXABgED0DvK91wv/+GJw+GNw+GZ/+GjiA3gw+Ehu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMkcPmSM8Wy//JcPsAkTDi4wB/+GcTCxcABPhCAhQw1NHbPOMAf/hnDRcCWoj4RSBukjBw3vhCuvLoZPgAIPsEINAgizits1jHBZPXTdDe10zQ7R7tU9s8MBIOAATwAgMgMPhIbuMA0//R2zzbPH/4ZxMQFwI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhIRAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACbtRNDT/9M/0wDRf/ho+Gb4Y/hiAgr0pCD0oRYVABRzb2wgMC40NS4wARagAAAAAts8+A/yABcAIPhG+EP4QsjL/8s/ywDJ7VQ=",
    codeHash: "c06f547dc3835f3d877c554fbdec0a2539c3a62a60d454dee4a3a2d6e3a86aec",
};
export default SimpleWalletContract;