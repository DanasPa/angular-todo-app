(function () {
    var app = angular.module("todoApp")

    app.component("todoList", {
        templateUrl: 'todo_list/todo.list.tpl.html',
        controllerAs: 'vm',
        controller: function (TodoService) {
            
            var vm = this;
            
            vm.todos = TodoService.todos;
            
            vm.deleteTodo = function(todoItem) {
                TodoService.deleteTodo(todoItem);
            }
            
            vm.toggleTodoCompletion = function(todoItem) {
                TodoService.toggleTodoCompletion(todoItem);
            }
        }
    });   
})();