pragma solidity ^0.4.4;
import './ACLStorage.sol';

/**
 * @title Access Control List contract
 */
contract ACL {
    ACLStorage acl = new ACLStorage();

    modifier onlyGroup(string _name) {
        if (!acl.isMemberOf(_name, msg.sender)) throw;
        _;
    }

    function getLength() constant returns (uint){
        return acl.groupLength();
    }
}
