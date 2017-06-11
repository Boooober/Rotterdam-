pragma solidity ^0.4.11;

contract mortal {
    address owner;

    function mortal() {owner = msg.sender;}

    function kill() {
        if (msg.sender == owner) suicide(owner);
    }
}

contract greeter is mortal {
    string public hash;
    bool approved;

    function greeter(string _documentHash) public {
        hash = _documentHash;
    }

    function approve() public {
        approved = true;
    }

    function reject() public {
        approved = false;
    }
}