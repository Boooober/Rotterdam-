const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

const DocumentABI = require('../abi/Document.json');
const DocumentContractAddress = '0x8473864ff56802a580dfb1034ec6c6ab13ba015d';

const DocumentContract = web3.eth.contract(DocumentABI).at(DocumentContractAddress);
DocumentContract.approve((err, res) => console.log(res));
