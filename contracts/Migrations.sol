pragma solidity ^0.4.2;
import 'common/Object.sol';

contract Migrations is Object{
  address public owner;
  uint public last_completed_migration;

  function Migrations() {
    owner = msg.sender;
  }

  function setCompleted(uint completed) onlyOwner {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) onlyOwner {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
