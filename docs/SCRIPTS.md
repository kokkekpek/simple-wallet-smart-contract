# Scripts
## Simple Wallet
### Info
```sh
yarn inf
```

### Deploy
```sh
yarn deploy
```

## Giver
### Info
```sh
yarn giver
```

### Deploy
```sh
yarn giver.deploy
```

### Send
```sh
yarn wallet.send <address> <value> <bounce> <flags> <comment>
```
* `address` - destination contract address
* `value` - value in nano grams
* `flags` - transaction flags. See [transfer](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer)
* `comment` - text comment. Maximum 124 symbols

Example
```sh
yarn giver.send 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 false
```

## Wallet
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

Example
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

Example
```sh
yarn wallet.call 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 true 1 ~/Projects/kokkekpek/nifi-smart-contracts/contracts/tokens/art/ArtRoot.abi.json create '{}'
```