(function () {

    angular
        .module('mediumApp')
        .controller('navigationCtrl', navigationCtrl);

    navigationCtrl.$Inject = ['$location', 'authentication', 'user']

    function navigationCtrl($location, authentication, user) {
        var vm = this;

        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentUser = {}
        vm.currentUser.imgUrl = "";

        if (vm.isLoggedIn) {
            vm.currentUser = authentication.currentUser();
            vm.currentUser.imgUrl = user.imgUrlById(vm.currentUser.id)        
        }        

        vm.logout = function () {
            authentication.logout();
            vm.isLoggedIn = false;
        };
    }

})();