const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const DocumentABI = require('../abi/Document.json');
const DocumentContractAddress = '0xecddc7daeeeb6b8ce6c49c65e14361fd0709e771';

const DocumentContract = web3.eth.contract(DocumentABI).at(DocumentContractAddress);
DocumentContract.approve().then(console.log);
