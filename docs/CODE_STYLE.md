# Code style
Based on [Ethereum Style Guide](https://docs.soliditylang.org/en/v0.5.3/style-guide.html)

## Naming
### Contract variable started from "_"
No
```sol
address private m_manager;
address private manager;
```

Yes
```sol
address private _manager;
```

### Private and internal methods started from "_"
No
```sol
function nameIsValid(string name) private pure returns (bool) {}
```

Yes
```sol
function _nameIsValid(string name) private pure returns (bool) {}
```

### Avoiding contractions
No
```sol
uint256 pubKey;
uint256 regName;
```

Yes
```sol
uint256 publicKey;
uint256 regisgerName;
```


## Modifiers
### If possible, data validation is placed in modifiers
No
```sol
function registerName() oneTon {
    require(msg.value == 1 ton, 104, "Method available with only 1 ton");
    // ...
}
```

Yes
```sol
modifier oneTon() {
    require(msg.value == 1 ton, 104, "Method available with only 1 ton");
    _;
}

function registerName() oneTon {
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
    /*************
     * STRUCTURES *
     *************/
    struct MyStructure {
        address sender;
        string  name;
    }
    
    
    
    /*************
     * CONSTANTS *
     *************/
     uint256 private constant X = 0;
     
     
     
    /**************
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