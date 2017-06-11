const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];
const firstUser = web3.eth.accounts[1];
const secondUser = web3.eth.accounts[2];

const DepartmentStorageABI = require('../build/contracts/DepartmentStorage.json').abi;
const DepartmentStorageContractAddress = '0xd154ba3a23118f7aa2786dadfff0352380c8d846';

const DepartmentStorage = web3.eth.contract(DepartmentStorageABI).at(DepartmentStorageContractAddress);
 DepartmentStorage.addMember('finan', firstUser);
// DepartmentStorage.createDepartment('finan', secondUser);
