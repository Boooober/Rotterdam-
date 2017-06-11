const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];

const DepartmentStorageABI = require('./build/contracts/DepartmentStorage.json').abi;
const DocumentFactoryABI = require('./build/contracts/DocumentFactory.json').abi;
const DepartmentStorageContractAddress = '0x666b854c5ad22f1c340dfae2979a004d3fc1fcdc';
const DocumentFactoryAddress = '0x753883aad33a74e1acc2d1014008ffdef74c9bea';

const DepartmentStorage = web3.eth.contract(DepartmentStorageABI).at(DepartmentStorageContractAddress);
const DocumentFactory = web3.eth.contract(DocumentFactoryABI).at(DocumentFactoryAddress);
DepartmentStorage.addMember('fin', web3.eth.accounts[0]);