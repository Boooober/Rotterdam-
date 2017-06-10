const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const AddressMapABI = require('../abi/AddressMap.json');
const AddressMapContractAddress = '0xd19d12b79e7e6a9c2a8e2af3fb2e9c609c383fc0';

const AddressMap = web3.eth.contract(AddressMapABI).at(AddressMapContractAddress);
AddressMap.set('fin', '0xa755dc4d3f41866c79398dcecbe97f3d9aae4c8a');
