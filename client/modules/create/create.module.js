import config from './create.module.config';
import ContractService from './contract.service';
import CreateComponent from './create.component';

export default angular.module('create', ['ui.router'])
    .service('ContractService', ContractService)
    .component('create', CreateComponent)
    .config(config)
    .name;
