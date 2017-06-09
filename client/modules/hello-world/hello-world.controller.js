export default class HelloWorldController {
    /** @ngInject */
    constructor(HelloWorldService) {
        this.HelloWorldService = HelloWorldService;
    }

    getTitle() {
        return this.HelloWorldService.getTitle();
    }
}
