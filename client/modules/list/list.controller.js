export default class ListController {
    /** @ngInject */
    constructor(ContractService) {
        this.ContractService = ContractService;
        this.contracts = [];
    }

    $onInit() {
        this.ContractService.getContracts()
            .then(contracts => this.contracts = contracts);
    }

    approve(address) {
        console.log(`${address} approved`);
    }

    reject(address) {
        console.log(`${address} rejected`);
    }
}
