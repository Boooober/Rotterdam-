export default class CreateController {
    /** @ngInject */
    constructor(ContractService) {
        this.ContractService = ContractService;
        this.contract = {};
    }

    createContract() {
        this.ContractService.saveContract(this.contract)
            .catch(function (error) {
                window.alert(error);
            });
    }
}
