var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = require('./build/contracts/ACL.json').abi;
var myContract = web3.eth.contract(abi).at('0x91027a0524c6a8dcfdec5c6e9c29f8ce4368e8e9');

module.exports = myContract;