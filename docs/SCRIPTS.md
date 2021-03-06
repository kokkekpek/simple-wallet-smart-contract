# Scripts
## Content table
- [Scripts](#scripts)
  - [Content table](#content-table)
  - [SimpleWallet](#simplewallet)
    - [Info](#info)
    - [Deploy](#deploy)
  - [Giver](#giver)
    - [Info](#info-1)
    - [Deploy](#deploy-1)
    - [Send](#send)
  - [Giver SE](#giver-se)
    - [Info](#info-2)
    - [Deploy](#deploy-2)
    - [Send](#send-1)
  - [SafeMultisigWallet](#safemultisigwallet)
    - [Info](#info-3)
    - [Deploy](#deploy-3)
    - [Send](#send-2)
    - [Call](#call)



## SimpleWallet
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
yarn giver.send <dest> <value> <bounce> <flags>
```
* `dest` - destination contract address
* `value` - value in nano grams
* `bounce` - if it's set and transaction falls then funds will be returned

**Example**
```sh
yarn giver.send 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 false
```



## Giver SE
### Info
```sh
yarn giver.se
```

### Deploy
```sh
yarn giver.se.deploy
```

### Send
```sh
yarn giver.se.send <dest> <value> <bounce> <flags>
```
* `dest` - destination contract address
* `value` - value in nano grams
* `bounce` - if it's set and transaction falls then funds will be returned

**Example**
```sh
yarn giver.se.send 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 false
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
yarn wallet.send <dest> <value> <bounce> <flags> <comment>
```
* `dest` - destination contract address
* `value` - value in nano grams
* `bounce` - if it's set and transaction falls then funds will be returned
* `flags` - transaction flags. See [transfer](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer)
* `comment` - text comment. Maximum 124 symbols

**Example**
```sh
yarn wallet.send 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 false 1 'test'
```

### Call
```sh
yarn wallet.send <dest> <value> <bounce> <flags> <pathToAbiFile> <method> <parameters>
```
* `dest` - destination contract address
* `value` - value in nano grams
* `bounce` - if it's set and transaction falls then funds will be returned
* `flags` - transaction flags. See [transfer](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer)
* `pathToAbiFile` - absolute path to destination contract *.abi.json file
* `method` - destination contract method
* `parameters` - destination contract method parameters in JSON format

**Example**
```sh
yarn wallet.call 0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff 100_000_000 true 1 ~/Projects/kokkekpek/nifi-smart-contracts/contracts/tokens/art/ArtRoot.abi.json create '{}'
```