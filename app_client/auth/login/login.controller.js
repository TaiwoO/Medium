(function(){
    angular
        .module('mediumApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location', 'authentication']
    function loginCtrl($location, authentication) {

        var vm = this;

        vm.credentials = {
            email: "",
            password: ""
        };
        vm.formError = "";

        vm.onSubmit = function () {
            if (!vm.credentials.email || !vm.credentials.password) {
                vm.formError = "All fields are required"
                return false;
            } else {
                authentication
                    .login(vm.credentials)
                    .then(function () {
                        $location.path('/');
                    })
                    .catch(function (result) {
                        vm.formError = result.data.message;
                    })            
            }
        };
    }

})();