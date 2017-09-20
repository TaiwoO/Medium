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
            .when('/login', {
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .when('/newpost', {
                templateUrl:'/user/post/post.view.html',
                controller: 'postCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
    }

    angular
        .module('mediumApp')
        .config(['$routeProvider', '$locationProvider', config]);

})();