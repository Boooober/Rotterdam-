const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const transactionHash = '0x0b8c89109d813f4d709f6d658f510ce640b582e13dfd6f8e980b0e6253dcb42d';

web3.eth.getTransaction(transactionHash, console.log);