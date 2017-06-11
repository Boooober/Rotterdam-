export default function config($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home />'
        });
}
