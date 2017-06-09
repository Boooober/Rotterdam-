export default function config($stateProvider) {
    $stateProvider
        .state('hello', {
            url: '/hello-world',
            template: '<hello-world />'
        });
}
