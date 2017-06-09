import config from './hello-world.module.config';
import HelloWorldService from './hello-world.service';
import HelloWorldComponent from './hello-world.component';

export default angular.module('hello-world', ['ui.router'])
    .service('HelloWorldService', HelloWorldService)
    .component('helloWorld', HelloWorldComponent)
    .config(config)
    .name;
