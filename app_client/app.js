(function () {

    angular
        .module('mediumApp', ['ngRoute'])

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
    }

    angular
        .module('mediumApp')
        .config(['$routeProvider', '$locationProvider', config])

})();