(function () {
    var app = angular.module("todoApp")

    app.factory('TodoService', function (LocalStorageService) {
        
        var todos = LocalStorageService.getItem("todos") || [];
        
        var service = {
            addTodo: addTodo,
            deleteTodo: deleteTodo,
            toggleTodoCompletion: toggleTodoCompletion,
            toggleAllTodoCompletion: toggleAllTodoCompletion,
            todos: todos
        }

        return service;

        ////////////////////////////////////

        function addTodo(todoText) {
            todos.push({
                todoText: todoText,
                completed: false
            });

            LocalStorageService.addItem('todos', todos);
        }

        function deleteTodo(index) {
            todos.splice(index, 1);
            LocalStorageService.addItem('todos', todos);
        }

        function toggleTodoCompletion(index) {
            todos[index].completed = !todos[index].completed;
            LocalStorageService.addItem('todos', todos);
        }

        function toggleAllTodoCompletion() {
            var completedTodos = 0;
            var totalTodos = todos.length;

            todos.forEach(function (todo, index) {
                if (todo.completed) {
                    completedTodos++;
                }
            });

            todos.forEach(function (todo, index) {
                if (completedTodos === totalTodos) {
                    todo.completed = false;
                } else {
                    todo.completed = true;
                }
            });

            LocalStorageService.addItem('todos', todos);
        }

    });
})();
