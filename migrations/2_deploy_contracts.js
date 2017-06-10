const AddressList = artifacts.require('./lib/AddressList.sol');
const Owned = artifacts.require('./common/Owned.sol');
const Destroyable = artifacts.require('./common/Destroyable.sol');
const Object = artifacts.require('./common/Object.sol');
const ACLStorage = artifacts.require('./acl/ACLStorage.sol');
const ACL = artifacts.require('./acl/ACL.sol');

module.exports = function(deployer) {
    deployer.deploy(AddressList);
    deployer.deploy(Owned);
    deployer.deploy(Destroyable);

    deployer.link(Owned, Object);
    deployer.link(Destroyable, Object);
    deployer.deploy(Object);

    deployer.link(AddressList, ACLStorage);
    deployer.deploy(ACLStorage);

    deployer.link(ACLStorage, ACL);
    deployer.link(AddressList, ACL);
    deployer.deploy(ACL);
};
