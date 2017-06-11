pragma solidity ^0.4.0;
import './DepartmentStorage.sol';

contract Document is Object, DepartmentStorage {
    uint public status;

    function Document() {
        status = 0;
    }

    function approve() {
        if (this.getGroupOf(msg.sender) == sha3("fin")) {
            status = 1;
        } else {
            throw;
        }
    }
}
