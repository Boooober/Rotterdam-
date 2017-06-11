import config from './home.module.config';
import HomePageComponent from './home.component';

export default angular.module('home', ['ui.router'])
    .component('home', HomePageComponent)
    .config(config)
    .name;
