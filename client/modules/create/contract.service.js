export default class CreateService {
    constructor(Web3Service, $state) {
        this.Web3Service = Web3Service;
        this.$state = $state;
        this.contracts = JSON.parse(window.localStorage.getItem('contracts')) || [];
    }

    saveContract(data) {
        const hash = this.Web3Service.web3.sha3(data.body, {encoding: 'hex'});

        return this.Web3Service.createContract(hash)
            .then((contract) => {
                this.contracts.push({
                    title: data.title,
                    body: data.body,
                    address: contract.address,
                    approved: null
                });

                window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
                this.$state.go('list');
            });
    }

    approve(address) {
        const contract = this.contracts.find(item => item.address === address);

        if (contract.approved !== null) {
            return;
        }

        this.Web3Service.approveContract(address)
            .then((transactionId) => {
                contract.approved = true;
                window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
            })
            .catch(e => {
                window.alert(e);
            });
    }

    reject(address) {
        const contract = this.contracts.find(item => item.address === address);

        if (contract.approved !== null) {
            return;
        }

        this.Web3Service.rejectContract(address)
            .then((transactionId) => {
                contract.approved = false;
                window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
            })
            .catch(e => {
                window.alert(e);
            });

    }

    getContracts() {
        return Promise.resolve(this.contracts);
    }

    getContract(id) {
        return this.contracts[id];
    }

    updateContract(id, tilte, body) {
        this.contracts[id].title = tilte;
        this.contracts[id].body = body;
        window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
    }
}
