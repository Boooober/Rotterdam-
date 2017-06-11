var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abiACL = require('./build/contracts/ACL.json').abi;
var abiACLS = require('./build/contracts/ACLStorage.json').abi;
var acl = web3.eth.contract(abiACL).at('0xfc9a22f570105192e56a2177ef6c23ab25f9c6c1');
var acls = web3.eth.contract(abiACLS).at('0xf72bdba62fb530f0744450fd936c671e3604daca');

module.exports = { acl: acl, acls: acls };