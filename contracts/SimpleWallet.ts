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
    tvc: "te6ccgECHwEAAw8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCj/AIrtUyDjAyDA/+MCIMD+4wLyCxwGBQQAAAKSIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfBAHAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAcDQCCCEBcjDDq7joDgIIIQaLVfP7uOgOAgghB/EfvXuuMCEw4IBCgw+kDXDX+K39cMAIrf1w0Pit/U0Q0MCwkCDts84wB/+GcKHgFciPhFIG6SMHDe+EK68uhk+ABUc0LIz4WAygBzz0DOAfoCcc8LaiHPFMki+wBfBRoACtTR0NMPAArU0dDSAAAK1NHQ038CKCCCEEkcPmS64wIgghBotV8/uuMCEQ8EXDD4QW7jAPhG8nNx+GbRiPhFIG6SMHDe+EK68uhk+EKIIcMA8uhl+AAw2zx/+GcQGhkeAGrtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4gN+MPhBbuMA0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMkcPmSM8WIc8L/8lw+wDeMOMAf/hnGxIeAAT4QgIoIIIQFbwlQrrjAiCCEBcjDDq64wIXFAIUMNTR2zzjAH/4ZxUeAkCI+EUgbpIwcN74Qrry6GT4ACD7BCDQ10zQ7R7tU9s8MBoWAATwAgMgMPhBbuMA0//R2zzbPH/4ZxsYHgI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhoZAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACbtRNDT/9M/0wDRf/hh+Gb4Y/hiAQr0pCD0oR0BFqAAAAAC2zz4D/IAHgAk+ELIy//4Q88LP/hGzwsAye1U",
    code: "te6ccgECHAEAAuIABCj/AIrtUyDjAyDA/+MCIMD+4wLyCxkDAgEAAAKSIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R27yfA0EAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAQDQCCCEBcjDDq7joDgIIIQaLVfP7uOgOAgghB/EfvXuuMCEAsFBCgw+kDXDX+K39cMAIrf1w0Pit/U0QoJCAYCDts84wB/+GcHGwFciPhFIG6SMHDe+EK68uhk+ABUc0LIz4WAygBzz0DOAfoCcc8LaiHPFMki+wBfBRcACtTR0NMPAArU0dDSAAAK1NHQ038CKCCCEEkcPmS64wIgghBotV8/uuMCDgwEXDD4QW7jAPhG8nNx+GbRiPhFIG6SMHDe+EK68uhk+EKIIcMA8uhl+AAw2zx/+GcNFxYbAGrtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4gN+MPhBbuMA0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMkcPmSM8WIc8L/8lw+wDeMOMAf/hnGA8bAAT4QgIoIIIQFbwlQrrjAiCCEBcjDDq64wIUEQIUMNTR2zzjAH/4ZxIbAkCI+EUgbpIwcN74Qrry6GT4ACD7BCDQ10zQ7R7tU9s8MBcTAATwAgMgMPhBbuMA0//R2zzbPH/4ZxgVGwI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhcWAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACbtRNDT/9M/0wDRf/hh+Gb4Y/hiAQr0pCD0oRoBFqAAAAAC2zz4D/IAGwAk+ELIy//4Q88LP/hGzwsAye1U",
    codeHash: "faf4cb3491404608f8986b12acd8070ea96d48591724aac57b83e474dc4bf92c",
};
export default SimpleWalletContract;