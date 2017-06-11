export default function config($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('account', {
            url: '/account',
            template: '<account-selector />'
        });

    $urlRouterProvider.otherwise('/');
}
