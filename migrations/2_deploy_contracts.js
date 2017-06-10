const AddressListLib = artifacts.require('./lib/AddressList.sol');
const Owned = artifacts.require('./common/Owned.sol');
const Destroyable = artifacts.require('./common/Destroyable.sol');
const Object = artifacts.require('./common/Object.sol');
const ACLStorage = artifacts.require('./acl/ACLStorage.sol');
const ACL = artifacts.require('./acl/ACL.sol');

module.exports = function(deployer) {
  deployer.deploy(AddressListLib);

  deployer.deploy(Owned);
  deployer.deploy(Destroyable);
  deployer.deploy(Object);
  deployer.deploy(ACLStorage);
  deployer.deploy(ACL);
  deployer.autolink();
};
