import Web3 from 'web3';
import contractSource from '../../contracts/mortal.sol';
import greeterContract from '../../build/contracts/greeter.json';
import mortalContract from '../../build/contracts/mortal.json';

export default class Web3Service {
    constructor($q) {
        this.$q = $q;
    }

    init() {
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://52.166.242.238:8545"));

        // this.contractCompiled = this.web3.eth.compile.solidity(contractSource);
        // this.contract = this.web3.eth.contract(this.contractCompiled.greeter.info.abiDefinition);
        this.contract = this.web3.eth.contract(greeterContract.abi);
    }

    createContract(hash) {
        return this.$q((resolve, reject) => {
            var greeter = this.contract.new(hash, {
                from: this.web3.eth.accounts[0],
                data: greeterContract.unlinked_binary,
                gas: 1000000
            }, function (e, contract) {
                if (e) {
                    reject(e);
                    return;
                }

                if (!contract.address) {
                    console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
                } else {
                    resolve(contract);
                    console.log("Contract mined! Address: " + contract.address);
                    console.log(contract);
                }
            })
        })
    }

    approveContract(address) {
        return this.$q((resolve, reject) => {
            this.contract.at(address).approve({
                gas: 200000,
                from: this.account,
            }, (err, result) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        });
    }

    isContractValid(address, body) {
        const hash = this.web3.sha3(body, {encoding: 'hex'});
        const contract = this.contract.at(address);

        console.log(this.contract.at(address).hash());
        return hash == this.contract.at(address).hash();
    }

    getAccounts() {
        return this.web3.eth.accounts.filter((item, idx) => idx !== 0);
    }

    setAccount(account, password) {
        if (this.account) {
            this.web3.personal.lockAccount(this.account);
        }

        this.web3.personal.unlockAccount(account, password, 0);
        this.account = account;
    }
}