(function () {
    var app = angular.module("todoApp")

    app.component("addTodoItem", {
        templateUrl: 'add_todo_item/add.todo.item.tpl.html',
        controllerAs: 'vm',
        controller: function (TodoService) {
            var vm = this;
            vm.todoText;

            vm.addTodoItem = function (todoText) {
                TodoService.addTodo(todoText);
                vm.todoText = '';
            }

            vm.toggleAllTodoCompletion = function () {
                TodoService.toggleAllTodoCompletion();
            }
        }
    });
})();
