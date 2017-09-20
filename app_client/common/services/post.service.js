(function () {

    angular
        .module('mediumApp')
        .service('post', post);

    post.$inject = ['$http', 'authentication']
    function post($http, authentication) {

        var createPost = function (data) {
            return $http.post('/api/post', data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        return {
            createPost: createPost
        };
    }

})();