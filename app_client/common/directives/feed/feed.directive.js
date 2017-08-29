(function () {

    angular
        .module('mediumApp')
        .directive('feed', feed);

    function feed() {
        return {
            restrict: 'EA',
            scope: {
                content: '=content'
            },
            templateUrl: '/common/directives/feed/feed.template.html',

        };
    }

})();