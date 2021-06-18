# Simple Wallet
## Requirements
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

## Tests
### Bring up a local node
```sh
yarn up
```

### Run tests
```sh
yarn test
```

## Deployment
1. Setup all deployment parameters in `config.net.deploy` in `configs/config.ts`.
2. Check balance on giver
```sh
yarn giver
```

3. If giver is not deployed send the money to the address you can see after `yarn giver` command and deploy.
```sh
yarn giver.deploy
```

4. Deploy
```sh
yarn deploy
```

## Scripts
[Link](docs/SCRIPTS.md)

## Code style
[Link](docs/CODE_STYLE.md)