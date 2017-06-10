pragma solidity ^0.4.0;
import 'lib/AddressMap.sol';

contract Document {
    AddressMap.Data groups;

    using AddressList for AddressList.Data;
    using AddressMap for AddressMap.Data;

    function approve() constant returns (string)
    { return groups.keyOf[msg.sender]; }
}
