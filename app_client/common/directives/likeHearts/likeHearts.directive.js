(function () {
    angular
        .module('mediumApp')
        .directive('likeHearts', likeHearts);

    function likeHearts() {
        return {
            restrict: 'EA',
            scope: {
                likes: '=likes'
            },
            templateUrl: '/common/directives/likeHearts/likeHearts.template.html'
        };
    }

})();