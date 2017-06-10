const AddressMapLib = artifacts.require('./lib/AddressMap.sol');
const AddressListLib = artifacts.require('./lib/AddressList.sol');
const Owned = artifacts.require('./common/Owned.sol');
const Destroyable = artifacts.require('./common/Destroyable.sol');
const Object = artifacts.require('./common/Object.sol');
const ACLStorage = artifacts.require('./acl/ACLStorage.sol');
const ACL = artifacts.require('./acl/ACL.sol');

const DepartmentStorage = artifacts.require('./core/DepartmentStorage.sol');
const Document = artifacts.require('./core/Document.sol');

module.exports = function (deployer) {
    deployer.deploy(AddressListLib);
    deployer.link(AddressListLib, [AddressMapLib, ACLStorage, DepartmentStorage, Document]);
    deployer.deploy(AddressMapLib);
    deployer.link(AddressMapLib, Document);

    deployer.deploy(Owned);
    deployer.deploy(Destroyable);
    deployer.deploy(Object);
    deployer.deploy(ACLStorage);
    deployer.deploy(ACL);
    deployer.deploy(DepartmentStorage);
    deployer.deploy(Document);
};
