(function(){
    
    angular
        .module('mediumApp')
        .directive('errorMsg', errorMsg);

    function errorMsg() {
        return {
            restrict: 'EA',
            scope: {
                message:"=message"
            },
            templateUrl: '/common/directives/errorMsg/errorMsg.template.html'
        };
    }

})();