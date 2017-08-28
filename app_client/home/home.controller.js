(function(){

    angular
        .module('mediumApp')
        .controller('homeCtrl',  homeCtrl);
        
    function homeCtrl() {
        var vm = this;

        vm.message = "Hello World!";
    }

})();