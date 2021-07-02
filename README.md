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
    - [Gas](#gas)
  - [Tests](#tests)
    - [Locally](#locally)
    - [In public network](#in-public-network)
    - [Gas](#gas-1)
  - [Deployment](#deployment)
    - [Locally](#locally-1)
    - [In public network](#in-public-network-1)
    - [Gas](#gas-2)
  - [Scripts](#scripts)
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
* For **local network**, the default key file is `GiverV2.se.keys.json`.
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

### Gas
**~0.03💎** enough for giver deployment


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
**~0.36💎** on giver enough for tests



## Deployment
### Locally
```sh
yarn deploy
```

### In public network
```sh
yarn cross-env net=<network> yarn deploy
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
**~0.05💎** on giver enough for deployment



## Scripts
[Link](docs/SCRIPTS.md)



## Code style
[Link](docs/CODE_STYLE.md)



## How it works
[Link](docs/HOW_IT_WORKS.md)