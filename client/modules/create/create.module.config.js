export default function config($stateProvider) {
    $stateProvider
        .state('create', {
            url: '/create',
            template: '<create />'
        });
}
