# Simple Wallet
![img](./docs/images/cover.svg)

## Content table
- [Simple Wallet](#simple-wallet)
  - [Content table](#content-table)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Compilation](#compilation)
  - [Local node startup](#local-node-startup)
  - [Giver](#giver)
    - [Deploy giver](#deploy-giver)
  - [Tests](#tests)
      - [Locally](#locally)
      - [In public network](#in-public-network)
      - [Gas](#gas)
  - [Deployment](#deployment)
    - [Locally](#locally-1)
    - [In public network](#in-public-network-1)
    - [Gas](#gas-1)
  - [Scripts](#scripts)
    - [SimpleWallet](#simplewallet)
      - [Info](#info)
      - [Deploy](#deploy)
    - [Giver](#giver-1)
      - [Info](#info-1)
      - [Deploy](#deploy-1)
      - [Send](#send)
    - [SafeMultisigWallet](#safemultisigwallet)
      - [Info](#info-2)
      - [Deploy](#deploy-2)
      - [Send](#send-1)
      - [Call](#call)
  - [Code Style](#code-style)
  - [How it works](#how-it-works)

## Requirements
![requirements](./docs/images/requirements.svg)
* [Node.js](https://nodejs.org) >= `16.x`
* [Yarn](https://classic.yarnpkg.com) >= `1.22.x`
* [Free TON Development Environment](https://github.com/tonlabs/tondev) >= `0.7.x`



## Installation
```sh
yarn install && yarn cp
```
Check and edit `configs/config.ts`



## Compilation
```sh
yarn make
```



## Local node startup
```sh
yarn up
```



## Giver
* Scripts use a [GiverV2](https://github.com/tonlabs/tonos-se/tree/master/contracts/giver_v2) smart contract for [tests](#tests) and [deployment](#deployment).
* For **local net**, the default key file is `GiverV2.se.keys.json` from the library.
* For **production network** you must deploy your own giver.

### Deploy giver
1. View giver address and balance
```sh
yarn cross-env net=<network> yarn giver
```
* `network` - network name from `configs/config.ts`

**Example**
```sh
yarn cross-env net=dev yarn giver
```

2. Send money to giver
3. Deploy giver
```sh
yarn cross-env net=<network> yarn giver.deploy
```
* `network` - network name from `configs/config.ts`

**Example**
```sh
yarn cross-env net=dev yarn giver.deploy
```



## Tests
### Locally
```sh
yarn test
```

### In public network
```sh
yarn cross-env net=<network> yarn test
```
* `network` - network name from `configs/config.ts`

**Examples**
```sh
yarn cross-env net=local yarn test
yarn cross-env net=dev yarn test
yarn cross-env net=main yarn test
yarn cross-env net=fld yarn test
```

### Gas
**~0.36💎** - on giver enough for tests



## Deployment
### Locally
```sh
yarn deploy
```

### In public network
```sh
yarn giver.send <address> <value> <bounce> <flags>
```
* `network` - network name from `configs/config.ts`

**Examples**
```sh
yarn cross-env net=local yarn deploy
yarn cross-env net=dev yarn deploy
yarn cross-env net=main yarn deploy
yarn cross-env net=fld yarn deploy
```

### Gas
**~0.05💎** - on giver enough for deployment



## Scripts
### SimpleWallet
#### Info
```sh
yarn inf
```

#### Deploy
```sh
yarn deploy
```

### Giver
#### Info
```sh
yarn giver
```

#### Deploy
```sh
yarn giver.deploy
```

#### Send
```sh
yarn giver.send <address> <value> <bounce> <flags>
```
* `address` - destination contract address
* `value` - value in nano grams
* `flags` - transaction flags. See [transfer](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer)

**Example**
```sh
yarn giver.send 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 false
```

## SafeMultisigWallet
### Info
```sh
yarn wallet
```

### Deploy
```sh
yarn wallet.deploy
```

### Send
```sh
yarn wallet.send <address> <value> <bounce> <flags> <comment>
```
* `address` - destination contract address
* `value` - value in nano grams
* `flags` - transaction flags. See [transfer](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer)
* `comment` - text comment. Maximum 124 symbols

**Example**
```sh
yarn wallet.send 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 false 1 'test'
```

### Call
```sh
yarn wallet.send <address> <value> <bounce> <flags> <pathToAbiFile> <method> <parameters>
```
* `address` - destination contract address
* `value` - value in nano grams
* `flags` - transaction flags. See [transfer](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer)
* `pathToAbiFile` - absolute path to destination contract *.abi.json file
* `method` - destination contract method
* `parameters` - destination contract method parameters in JSON format

**Example**
```sh
yarn wallet.call 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 true 1 ~/Projects/kokkekpek/nifi-smart-contracts/contracts/tokens/art/ArtRoot.abi.json create '{}'
```



## Code style
[Link](docs/CODE_STYLE.md)


## How it works
[Link](docs/HOW_IT_WORKS.md)