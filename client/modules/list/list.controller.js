export default class ListController {
    /** @ngInject */
    constructor(ContractService, Web3Service) {
        this.ContractService = ContractService;
        this.Web3Service = Web3Service;
        this.contracts = [];
    }

    $onInit() {
        this.ContractService.getContracts()
            .then(contracts => {
                this.contracts = contracts.map(contract => {
                    return Object.assign({}, contract, {
                        isValid: this.isValid(contract)
                    })
                })
            });
    }

    isValid(contract) {
        return this.Web3Service.isContractValid(contract.address, contract.body)
    }

    approve(address) {
        this.ContractService.approve(address);
        console.log(`${address} approved`);
    }

    reject(address) {
        this.ContractService.reject(address);
        console.log(`${address} rejected`);
    }
}
