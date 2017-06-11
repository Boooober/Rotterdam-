export default function config($stateProvider) {
    $stateProvider
        .state('account', {
            url: '/account',
            template: '<account-selector />'
        });
}
