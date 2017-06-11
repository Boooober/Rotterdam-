import config from './list.module.config';
import ListComponent from './list.component';

export default angular.module('list', ['ui.router'])
    .component('list', ListComponent)
    .config(config)
    .name;
