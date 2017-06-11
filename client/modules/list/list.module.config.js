export default function config($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/list',
            template: '<list />'
        });
}
