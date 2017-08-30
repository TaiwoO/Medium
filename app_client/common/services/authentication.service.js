(function () {

    angular
        .module('mediumApp')
        .service('authentication', authentication);

    authentication.$inject = ['$http', '$window'];

    function authentication($http, $window) {

        var saveToken = function (token) {
            $window.localStorage['medium-token'] = token
        };

        var getToken = function () {
            return $window.localStorage['medium-token'];
        };

        var login = function (user) {
            return $http.post('/api/login', user)
                .then(
                    function (result) {
                        saveToken(result.data.token);
                    });
        };

        var logout = function (user) {
            $window.localStorage.removeItem('medium-token');
        };

        var register = function (user) {
            return $http.post('/api/register', user)
                .then(
                    function (result) {
                        saveToken(result.data.token);
                    });
        };

        var isLoggedIn = function () {
            var token = getToken();
            var payload;

            // Logged in if there exists a unexpired valid token
            if (token) {
                payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.exp > (Date.now() / 1000);
            } else {
                return false
            }
        }

        var currentUser = function () {
            var token = getToken();
            var payload;

            if (isLoggedIn()) {
                payload = JSON.parse($window.atob(token.split('.')[1]));
                return {
                    id: payload._id,
                    username: payload.username,
                    posts: payload.posts,
                    email: payload.email,
                };
            }
        }

        return {
            login: login,
            logout: logout,
            register: register,
            isLoggedIn: isLoggedIn,
            currentUser: currentUser
            // getToken: getToken
        };
    }

})();