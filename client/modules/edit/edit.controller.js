export default class EditController {
    /** @ngInject */
    constructor(ContractService, $stateParams, $state) {
        this.ContractService = ContractService;
        this.$state = $state;

        this.contractId = $stateParams.id;
        this.contract = Object.assign({}, ContractService.getContract($stateParams.id));
    }

    updateContract() {
        this.ContractService.updateContract(this.contractId, this.contract.title, this.contract.body);
        this.$state.go('list');
    }
}
