const SimpleWalletV2Contract = {
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
            },
            {
                "name": "getVersion",
                "inputs": [],
                "outputs": [
                    {
                        "name": "version",
                        "type": "uint8"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECIgEAA2kAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCj/AIrtUyDjAyDA/+MCIMD+4wLyCx8GBQQAAAKSIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfBAHAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAcDQiCCEBcjDDq7joDgIIIQSRw+ZLuOgOAgghB/EfvXu46A4BYRCAIoIIIQaLVfP7rjAiCCEH8R+9e64wIPCQQoMPpA1w1/it/XDACK39cND4rf1NEODQwKAg7bPOMAf/hnCyEBXIj4RSBukjBw3vhCuvLoZPgAVHNCyM+FgMoAc89AzgH6AnHPC2ohzxTJIvsAXwUdAArU0dDTDwAK1NHQ0gAACtTR0NN/BFww+EFu4wD4RvJzcfhm0Yj4RSBukjBw3vhCuvLoZPhCiCHDAPLoZfgAMNs8f/hnEB0cIQBq7UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeICKCCCEChlAKy64wIgghBJHD5kuuMCFBIDfjD4QW7jANHbPCHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADJHD5kjPFiHPC//JcPsA3jDjAH/4Zx4TIQAE+EICdDDR2zwhwP+OKiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAqGUArIzxYhzwsHyXD7AN4w4wB/+GcVIQACcgIoIIIQFbwlQrrjAiCCEBcjDDq64wIaFwIUMNTR2zzjAH/4ZxghAkCI+EUgbpIwcN74Qrry6GT4ACD7BCDQ10zQ7R7tU9s8MB0ZAATwAgMgMPhBbuMA0//R2zzbPH/4Zx4bIQI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4Yh0cAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACbtRNDT/9M/0wDRf/hh+Gb4Y/hiAQr0pCD0oSABFqAAAAAC2zz4D/IAIQAk+ELIy//4Q88LP/hGzwsAye1U",
    code: "te6ccgECHwEAAzwABCj/AIrtUyDjAyDA/+MCIMD+4wLyCxwDAgEAAAKSIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfA0EAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAQDQiCCEBcjDDq7joDgIIIQSRw+ZLuOgOAgghB/EfvXu46A4BMOBQIoIIIQaLVfP7rjAiCCEH8R+9e64wIMBgQoMPpA1w1/it/XDACK39cND4rf1NELCgkHAg7bPOMAf/hnCB4BXIj4RSBukjBw3vhCuvLoZPgAVHNCyM+FgMoAc89AzgH6AnHPC2ohzxTJIvsAXwUaAArU0dDTDwAK1NHQ0gAACtTR0NN/BFww+EFu4wD4RvJzcfhm0Yj4RSBukjBw3vhCuvLoZPhCiCHDAPLoZfgAMNs8f/hnDRoZHgBq7UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeICKCCCEChlAKy64wIgghBJHD5kuuMCEQ8DfjD4QW7jANHbPCHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADJHD5kjPFiHPC//JcPsA3jDjAH/4ZxsQHgAE+EICdDDR2zwhwP+OKiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAqGUArIzxYhzwsHyXD7AN4w4wB/+GcSHgACcgIoIIIQFbwlQrrjAiCCEBcjDDq64wIXFAIUMNTR2zzjAH/4ZxUeAkCI+EUgbpIwcN74Qrry6GT4ACD7BCDQ10zQ7R7tU9s8MBoWAATwAgMgMPhBbuMA0//R2zzbPH/4ZxsYHgI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhoZAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACbtRNDT/9M/0wDRf/hh+Gb4Y/hiAQr0pCD0oR0BFqAAAAAC2zz4D/IAHgAk+ELIy//4Q88LP/hGzwsAye1U",
    codeHash: "3622477636e91267002598f498c8afaecd9f238e819a8c9d7229773414862434",
};
export default SimpleWalletV2Contract;