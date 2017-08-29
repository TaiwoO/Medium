(function () {

    angular
        .module('mediumApp')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl() {
        var vm = this;

        vm.message = "Hello World!";
        vm.posts = [{
                author: "John Doe",
                date: "May 3, 2013",
                likes: 34,
                title: "Test title",
                img: "http://lorempixel.com/50/50/",
                body: "Lorem ipsum dolor sit amet, mauris vel varius, ut sociis ultricies, velit a, nonummy gravida enim. Augue ac neque augue facilisis sapien nullam, venenatis faucibus velit ad, donec massa sociosqu urna placeat, dictum ut. Libero egestas ligula. Nam pede nulla pellentesque, sodales sit tortor vestibulum doloremque ligula tellus, ultricies etiam ipsum dolor ipsum eget. Fermentum dolor dui eros est in pharetra, accumsan consectetuer neque bibendum metus, facilisis torquent augue ut mattis id in. Ut elementum natoque, orci leo ligula habitasse est, in lacus ipsum egestas, vitae dui, pretium ultrices placerat. Laoreet pharetra facilisi sem mauris sed, odio lorem."
            },
            {
                author: "Ihav Nonam",
                date: "May 9, 2017",
                likes: 4,
                title: "Test title2",
                img: "http://lorempixel.com/50/50/",
                body: "Lorem ipsum dolor sit amet, mauris vel varius, ut sociis ultricies, velit a, nonummy gravida enim. Augue ac neque augue facilisis sapien nullam, venenatis faucibus velit ad, donec massa sociosqu urna placeat, dictum ut. Libero egestas ligula. Nam pede nulla pellentesque, sodales sit tortor vestibulum doloremque ligula tellus, ultricies etiam ipsum dolor ipsum eget. Fermentum dolor dui eros est in pharetra, accumsan consectetuer neque bibendum metus, facilisis torquent augue ut mattis id in. Ut elementum natoque, orci leo ligula habitasse est, in lacus ipsum egestas, vitae dui, pretium ultrices placerat. Laoreet pharetra facilisi sem mauris sed, odio lorem."
            }

        ]
        vm.tags = ["Angular", "React", "Vue", "Node", "Javascript", "Typescript"];
    }

})();