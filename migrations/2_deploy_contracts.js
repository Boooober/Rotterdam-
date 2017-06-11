const AddressMapLib = artifacts.require('./lib/AddressMap.sol');
const AddressListLib = artifacts.require('./lib/AddressList.sol');
const Owned = artifacts.require('./common/Owned.sol');
const Destroyable = artifacts.require('./common/Destroyable.sol');
const Object = artifacts.require('./common/Object.sol');
const ACLStorage = artifacts.require('./acl/ACLStorage.sol');
const ACL = artifacts.require('./acl/ACL.sol');

const Approvers = artifacts.require('./core/Approvers.sol');
const DepartmentStorage = artifacts.require('./core/DepartmentStorage.sol');
const Document = artifacts.require('./core/Document.sol');
const DocumentFactory = artifacts.require('./core/DocumentFactory.sol');

module.exports = function (deployer) {

    deployer.deploy(Owned);
    deployer.deploy(Destroyable);
    deployer.deploy(Object);

    deployer.deploy(DepartmentStorage).then(function() {
        deployer.deploy(Approvers);
        //deployer.deploy(Document);
        return deployer.deploy(DocumentFactory, DepartmentStorage.address);
    });
};
