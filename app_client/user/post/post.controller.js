(function () {

    angular
        .module('mediumApp')
        .controller('postCtrl', postCtrl);

    postCtrl.$inject = ['$location', 'post'];

    function postCtrl($location, post) {
        var vm = this;

        vm.formError = "";
        vm.formData = {
            title: "",
            subtitle: "",
            body: "",
            tags: ""
        };

        vm.createPost = function () {
            post.createPost(vm.formData)
                .then(function () {
                    $location.path('/'); // return to home page
                })
                .catch(function (result) {
                    vm.formError = result.data.message;
                });
        };

        vm.onSubmit = function () {
            if (!vm.formData.title || !vm.formData.subtitle || !vm.formData.body) {
                vm.formError = "Make sure that you have a body, title, and subtitle"
                return false
            } else {
                vm.createPost();
            }
        };

    }

})();