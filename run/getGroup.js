'use strict';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

const DocumentABI = require('../build/contracts/Document.json').abi;
const DocumentContractAddress = '0xb7c1a7ebd74502e0c2f731df489bda79a6399443';

const DocumentContract = web3.eth.contract(DocumentABI).at(DocumentContractAddress);
DocumentContract.status((err, res) => console.log("err",err,"res", res));
DocumentContract.approve((err, res) => console.log(res));
DocumentContract.status((err, res) => console.log("err",err,"res", res));


