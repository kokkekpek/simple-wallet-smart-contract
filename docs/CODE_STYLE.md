# Code style
Based on [Ethereum Style Guide](https://docs.soliditylang.org/en/v0.8.5/style-guide.html)

## Naming
### Contract variables started from "_"
✅
```sol
address private _manager;
```

⛔️
```sol
address private m_manager;
address private manager;
```

### Private and internal methods started from "_"
✅
```sol
function _nameIsValid(string name) private pure returns (bool) {}
```

⛔️
```sol
function nameIsValid(string name) private pure returns (bool) {}
```

### Avoiding contractions
✅
```sol
uint256 publicKey;
uint256 regisgerName;
```

⛔️
```sol
uint256 pubKey;
uint256 regName;
```


## Modifiers
### If possible, place data validation into modifiers.
✅
```sol
modifier oneTon() {
    require(msg.value == 1 ton, 104, "Method available only 1 ton only");
    _;
}

function registerName() oneTon {
    // ...
}
```

⛔️
```sol
function registerName() oneTon {
    require(msg.value == 1 ton, 104, "Method available with 1 ton only");
    // ...
}
```

## Errors
### If the class can return errors, write them at the beginning of a class
```sol
/**
 * Error codes
 *     100 - Method for the manager only
 *     101 - Public key cannot be null
 *     102 - Manager address cannot be null
 *     103 - Invalid name
 */
contract Root {
}
```

## Structure
### Each contract consists of several blocks
Each block begins with a three-line commentary for easy navigation. Blocks in the following order.
```sol
    /**********
     * EVENTS *
     **********/
    event BidEvent(uint128 id, address creator, address bider, uint128 value);
    
    
    
    /**************
     * STRUCTURES *
     **************/
    struct MyStructure {
        address sender;
        string  name;
    }
    
    
    
    /*************
     * CONSTANTS *
     *************/
    uint256 private constant X = 0;
    
    
    /**********
     * STATIC *
     **********/
    address static _root;
    
    
    
    /*************
     * VARIABLES *
     *************/
    uint256 private _x;
    
    
    
    /*************
     * MODIFIERS *
     *************/
    modifier accept { _; }
    
    
    
    /***************
     * CONSTRUCTOR *
     ***************/
    constructor() public {}
    
    
    
    /************
     * EXTERNAL *
     ************/
    function externalFunction() external {}
    
    
    
    /**********
     * PUBLIC *
     **********/
    function publicFunction() public {}
    
    
    
    /*************
     * RECEIVERS *
     *************/
    function receiveX() external view returns(uint256 x) {}
    
    
    
    /***********
     * GETTERS *
     ***********/
    function getX() public view returns(uint256 x) {}
    
    
    
    /***********
     * SETTRES *
     ***********/
    function setX(uint256 x) public {}
    
    
    
    /************
     * INTERNAL *
     ************/
    function _calculateX() internal {}
    
    
    
    /***********
     * PRIVATE *
     ***********/
    function _calculateX2() private {}
    
    
    
    /*********
     * OTHER *
     *********/
    // Other
```