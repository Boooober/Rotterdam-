const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

const DepartmentStorageABI = require('./build/contracts/DepartmentStorage.json').abi;
const DepartmentStorageContractAddress = '0x4003f151c8f9f61137256746f05c97b7c0e18e3f';

const DepartmentStorage = web3.eth.contract(DepartmentStorageABI).at(DepartmentStorageContractAddress);
DepartmentStorage.addMember('fin', web3.eth.accounts[0]);