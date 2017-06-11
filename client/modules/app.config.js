export default function config($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('account', {
            url: '/account',
            template: '<account-selector />'
        })
        .state('edit', {
            url: '/edit/:id',
            template: '<edit />'
        });

    $urlRouterProvider.otherwise('/');
}
