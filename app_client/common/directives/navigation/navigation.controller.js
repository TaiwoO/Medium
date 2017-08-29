(function () {

    angular
        .module('mediumApp')
        .controller('navigationCtrl', navigationCtrl);

    navigationCtrl.$Inject = ['$location','authentication']
    function navigationCtrl($location, authentication) {
        var vm = this;

        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentUser = authentication.currentUser();

        vm.logout = function() {
            authentication.logout();
            vm.isLoggedIn = false;
        };
        
       
    }

})();