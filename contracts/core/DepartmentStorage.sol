pragma solidity ^0.4.0;
import 'common/Object.sol';

contract DepartmentStorage is Object {

    mapping(address => bytes32) memberGroups;

    function getGroupOf(address _member) constant returns (bytes32) {
        return memberGroups[_member];
    }

    function addMember(string _type, address _member) onlyOwner {
        memberGroups[_member] = sha3(_type);
    }
}
