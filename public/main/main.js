(function () {
    var app = angular.module("todoApp", [])

    app.component("main", {
        templateUrl: 'main/main.tpl.html',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.appTitle = "TodoList";
        }
    });   
})();