pragma solidity ^0.4.0;
import 'common/Object.sol';
import 'lib/AddressList.sol';

contract DepartmentStorage is Object {
    // Departments list
    string[] public departments;

    mapping(address => bytes32) memberGroups;

    mapping(bytes32 => AddressList.Data) members;
    using AddressList for AddressList.Data;

    function getGroupOf(address _member) constant returns (bytes32) {
        return memberGroups[_member];
    }

    /**
    * @dev Create department group
    * @param _type is a department group type
    * @param _firstMember is a first member address, department group should not be empty
    */
    function createDepartment(string _type, address _firstMember) onlyOwner {
        var mems = members[sha3(_type)];
        if (mems.first() == 0) {
            departments[departments.length++] = _type;
            mems.append(_firstMember);
            memberGroups[_firstMember] = sha3(_type);
        }
    }

    /**
     * @dev Add new member into department group
     * @param _type is a department group type
     * @param _member is a new member address
     */
    function addMember(string _type, address _member) onlyOwner {
        members[sha3(_type)].append(_member);
        memberGroups[_member] = sha3(_type);
    }

    /**
     * @dev Remove member from department group
     * @param _type is a department group name
     * @param _member is a address for remove
     */
    function removeMember(string _type, address _member) onlyOwner {
        memberGroups[_member] = "";
        members[sha3(_type)].remove(_member);
    }
}
