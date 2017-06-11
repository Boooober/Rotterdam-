pragma solidity ^0.4.0;

import './Approvers.sol';
import './DepartmentStorage.sol';

contract Document is Object, Approvers {
    uint public status;
    bytes32 public contentHash;

    function Document(address _dsAddress, bytes32 _contentHash) {
        ds = DepartmentStorage(_dsAddress);
        contentHash = _contentHash;
        status = 0;
    }

    function approve() canApprove {
        status = 1;
    }
}
