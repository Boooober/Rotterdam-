'use strict';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

const DocumentABI = require('../build/contracts/Document.json').abi;
const DocumentContractAddress = '0x153a8e1bd93c2ddc6c9448d2c8247a47d7bb377a';

const DocumentContract = web3.eth.contract(DocumentABI).at(DocumentContractAddress);
DocumentContract.status((err, res) => console.log("err",err,"res", res));
DocumentContract.approve((err, res) => console.log(res));
DocumentContract.status((err, res) => console.log("err",err,"res", res));


