(function () {

    angular
        .module('mediumApp')
        .service('user', user);

    function user() {

        var imgUrlById = function(userId) {
            return '/api/user/' + userId + '/profileImg'
        }
        return {
            imgUrlById: imgUrlById
        };

    }

})();