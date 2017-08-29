(function () {
    angular
        .module('mediumApp')
        .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$location','authentication'];

    function registerCtrl($location, authentication) {

        var vm = this;

        vm.credentials = {
            username: "",
            email: "",
            password: ""
        };
        vm.formError = "";

        vm.onSubmit = function () {
            if (!vm.credentials.username || !vm.credentials.email || !vm.credentials.password) {
                vm.formError = "All fields are required"
                return false;
            } else {
                // doRegisiter();
                authentication
                    .register(vm.credentials)
                    
                    .then(function () {
                        $location.path('/');
                    })
                    .catch(function (result) {
                        vm.formError = result.data.message;
                    })            
            }
        };

        var doRegisiter = function () {
            authentication
                .register(vm.credentials)
                .then(function () {
                    $location.path('/');
                })
                .catch(function (result) {
                    vm.formError = result.data.message;
                    console.log("Somehting went wrong ohh no! Note: i need to set the .message in the api")
                })
        };

    }

})();