pragma solidity ^0.4.0;
import 'lib/AddressMap.sol';
import './DepartmentStorage.sol';

contract Document {
    uint public status;
    DepartmentStorage ds = new DepartmentStorage();

    function Document() {
        status = 0;
    }

    function approve() {
        if (ds.getGroupOf(msg.sender) == sha3("fin")) {
            status = 1;
        } else {
            throw;
        }
    }
}
