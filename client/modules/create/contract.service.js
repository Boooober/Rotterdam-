export default class CreateService {
    constructor(Web3Service) {
        this.Web3Service = Web3Service;
        this.contracts = JSON.parse(window.localStorage.getItem('contracts')) || [];
    }

    saveContract(data) {
        const hash = this.Web3Service.web3.sha3(data.body, {encoding: 'hex'});

        this.Web3Service.createContract(hash)
            .then((contract) => {
                this.contracts.push({
                    title: data.title,
                    body: data.body,
                    address: contract.address,
                    approved: null
                });

                window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
            });
    }

    approve(address) {
        const contract = this.contracts.find(item => item.address === address);

        if (contract.approved !== null) {
            return;
        }

        this.Web3Service.approveContract(address).then((transactionId) => {
            contract.approved = true;
            window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
        });
    }

    getContracts() {
        return Promise.resolve(this.contracts);
    }
}
