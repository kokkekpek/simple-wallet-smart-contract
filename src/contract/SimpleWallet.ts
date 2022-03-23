const SimpleWalletContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            }
        ]
    },
    tvc: "te6ccgECHAEAAuAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBgUEAAACjO1E0NdJwwH4ZiHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwMBwNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBcXBwIoIIIQaLVfP7vjAiCCEH8R+9e64wIKCAI4MPhG8uBMIZPU0dDe+kDTf9IA0w/U0ds84wDyAAkbAVaI+EUgbpIwcN74Qrry6GT4AFUCVRLIz4WAygDPhEDOAfoCcc8LaszJAfsAFQRQIIIQFbwlQrrjAiCCEBcjDDq64wIgghBJHD5kuuMCIIIQaLVfP7rjAhIPDQsEUDD4Qm7jAPhG8nPRiPhFIG6SMHDe+EK68uhkiPhCwwDy6GX4ANs88gAMFRQbAT7tRNDXScIBjhRw7UTQ9AWAQPQO8r3XC//4YnD4Y+MNFgNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghDJHD5kzwuBy//JcPsAkTDi4wDyABYOGwAE+EICHDD4RvLgTNTR2zzjAPIAEBsCVoj4RSBukjBw3vhCuvLoZPgAIPsE0CCLOK2zWMcFk9dN0N7XTNDtHu1T2zwVEQAE8AIDKjD4RvLgTPhCbuMA0//R2zww2zzyABYTGwI0iPhFIG6SMHDe+EK68uhkiCHDAPLoZfgA+GIVFAA+T3duZXIgcHVibGljIGtleSBjYW5ub3QgYmUgbnVsbAAyTWV0aG9kIGZvciB0aGUgb3duZXIgb25seQAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIK9KQg9KEaGQAUc29sIDAuNTguMgEWoAAAAALbPPgP8gAbABz4Q/hCyMv/yz/Pg8ntVA==",
    code: "te6ccgECGQEAArMABCSK7VMg4wMgwP/jAiDA/uMC8gsVAwIBAAACjO1E0NdJwwH4ZiHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwJBANK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBQUBAIoIIIQaLVfP7vjAiCCEH8R+9e64wIHBQI4MPhG8uBMIZPU0dDe+kDTf9IA0w/U0ds84wDyAAYYAVaI+EUgbpIwcN74Qrry6GT4AFUCVRLIz4WAygDPhEDOAfoCcc8LaszJAfsAEgRQIIIQFbwlQrrjAiCCEBcjDDq64wIgghBJHD5kuuMCIIIQaLVfP7rjAg8MCggEUDD4Qm7jAPhG8nPRiPhFIG6SMHDe+EK68uhkiPhCwwDy6GX4ANs88gAJEhEYAT7tRNDXScIBjhRw7UTQ9AWAQPQO8r3XC//4YnD4Y+MNEwNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghDJHD5kzwuBy//JcPsAkTDi4wDyABMLGAAE+EICHDD4RvLgTNTR2zzjAPIADRgCVoj4RSBukjBw3vhCuvLoZPgAIPsE0CCLOK2zWMcFk9dN0N7XTNDtHu1T2zwSDgAE8AIDKjD4RvLgTPhCbuMA0//R2zww2zzyABMQGAI0iPhFIG6SMHDe+EK68uhkiCHDAPLoZfgA+GISEQA+T3duZXIgcHVibGljIGtleSBjYW5ub3QgYmUgbnVsbAAyTWV0aG9kIGZvciB0aGUgb3duZXIgb25seQAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIK9KQg9KEXFgAUc29sIDAuNTguMgEWoAAAAALbPPgP8gAYABz4Q/hCyMv/yz/Pg8ntVA==",
    codeHash: "32f1132a121d2c1df7331c5b5bce3b85721a4499f786812e2d80a55dcb1abbd4",
};
export default SimpleWalletContract;