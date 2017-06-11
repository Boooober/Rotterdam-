export default class CreateController {
    /** @ngInject */
    constructor(Web3Service, $state) {
        this.Web3Service = Web3Service;
        this.$state = $state;
        this.accounts = Web3Service.getAccounts();
    }

    setAccount() {
        this.Web3Service.setAccount(this.account, this.password);
        this.$state.go('home');
    }
}
