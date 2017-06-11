const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const DepartmentStorageABI = require('./build/contracts/DepartmentStorage.json').abi;
const DepartmentStorageContractAddress = '0xfBEb40399af2fD8AcdFB39f44c763eB04860492e';

const DepartmentStorage = web3.eth.contract(DepartmentStorageABI).at(DepartmentStorageContractAddress);
DepartmentStorage.createDepartment('fin', web3.eth.accounts[0]);