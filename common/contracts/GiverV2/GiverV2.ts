const GiverV2Contract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "upgrade",
                "inputs": [
                    {
                        "name": "newcode",
                        "type": "cell"
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "getMessages",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "hash",
                                "type": "uint256"
                            },
                            {
                                "name": "expireAt",
                                "type": "uint64"
                            }
                        ],
                        "name": "messages",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "events": []
    },
    tvc: "te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o",
    code: "te6ccgECFAEAA6EAAib/APSkICLAAZL0oOGK7VNYMPShAwEBCvSkIPShAgAAAgEgBgQB/P9/Ie1E0CDXScIBn9P/0wD0Bfhqf/hh+Gb4Yo4b9AVt+GpwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3iP4QvhFIG6SMHDeuvLgZSHTP9MfNDH4IyEBvvK5IfkAIPhKgQEA9A4gkTHeswUATvLgZvgAIfhKIgFVAcjLP1mBAQD0Q/hqIwRfBNMfAfAB+EdukvI83gIBIAwHAgFYCwgBCbjomPxQCQH++EFujhLtRNDT/9MA9AX4an/4Yfhm+GLe0XBtbwL4SoEBAPSGlQHXCz9/k3BwcOKRII43IyMjbwJvIsgizwv/Ic8LPzExAW8iIaQDWYAg9ENvAjQi+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA8iCEHdEx+KCEIAAAACxzwsfIQoAom8iAssf9ADIglhgAAAAAAAAAAAAAAAAzwtmgQOYIs8xAbmWcc9AIc8XlXHPQSHN4iDJcfsAWzDA/44S+ELIy//4Rs8LAPhKAfQAye1U3n/4ZwDFuRar5/8ILdHG3aiaBBrpOEAz+n/6YB6Avw1P/ww/DN8MUcN+gK2/DU4AMAgegd5XuuF//wxOHwxuHwzP/ww8W98I0l5Gcm4/DNxfABo/CFkZf/8I2eFgHwlAPoAZPaqP/wzwAgEgDw0B17sV75NfhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3vpA1w1/ldTR0NN/39cMAJXU0dDSAN/RIiIic8hxzwsBIs8KAHPPQCTPFiP6AoBpz0Byz0AgySL7AF8F+EqBAQD0hpUB1ws/f5NwcHDikSCA4Ako4t+CMiAbuf+EojASEBgQEA9FswMfhq3iL4SoEBAPR8lQHXCz9/k3BwcOICNTMx6F8DXwP4QsjL//hGzwsA+EoB9ADJ7VR/+GcCASAREADHuORhh18ILdHCXaiaGn/6YB6Avw1P/ww/DN8MW9qaPwhfCKQN0kYOG9deXAy/AB8IWRl//wjZ4WAfCUA+gBk9qp8B5B9ghBodo92qfgBGHwhZGX//CNnhYB8JQD6AGT2qj/8M8AIC2hMSAC2vhCyMv/+EbPCwD4SgH0AMntVPgP8gCAB1pwIccAnSLQc9ch1wsAwAGQkOLgIdcNH5LyPOFTEcAAkODBAyKCEP////28sZLyPOAB8AH4R26S8jzeg=",
    codeHash: "4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b",
};
export default GiverV2Contract;