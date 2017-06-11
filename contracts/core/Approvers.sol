pragma solidity ^0.4.4;
import './DepartmentStorage.sol';

/**
 * @title Access Control List contract
 */
contract Approvers {
    DepartmentStorage public ds;

    modifier canApprove() {
        if (ds.getGroupOf(msg.sender) != sha3('fin')) throw;
        _;
    }
}
