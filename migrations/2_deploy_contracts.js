const AddressMapLib = artifacts.require('./lib/AddressMap.sol');
const AddressListLib = artifacts.require('./lib/AddressList.sol');
const Owned = artifacts.require('./common/Owned.sol');
const Destroyable = artifacts.require('./common/Destroyable.sol');
const Object = artifacts.require('./common/Object.sol');
const ACLStorage = artifacts.require('./acl/ACLStorage.sol');
const ACL = artifacts.require('./acl/ACL.sol');

const Document = artifacts.require('./core/Document.sol');

module.exports = function (deployer) {
    deployer.deploy(AddressListLib);
    deployer.link(AddressListLib, AddressMapLib);
    deployer.deploy(AddressMapLib);
    deployer.deploy(Owned);
    deployer.deploy(Destroyable);
    deployer.deploy(Object);
    deployer.link(AddressListLib, ACLStorage);
    deployer.deploy(ACLStorage);
    deployer.deploy(ACL);
    deployer.link(AddressMapLib, Document);
    deployer.deploy(Document);
};
