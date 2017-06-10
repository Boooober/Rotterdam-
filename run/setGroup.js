const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

const DepartmentStorageABI = require('../abi/DepartmentStorage.json');
const DepartmentStorageContractAddress = '0x5182bf388d135a82fbe427dd44a651f5764eeb6c';

const DepartmentStorage = web3.eth.contract(DepartmentStorageABI).at(DepartmentStorageContractAddress);
DepartmentStorage.addMember('fin', '0x5d594ade82ffb204c60cdc7f9f925d4f1f751f1e');
