(function () {
    var app = angular.module("todoApp")

    app.factory('LocalStorageService', function () {

        var service = {
            addItem: addItem,
            getItem: getItem
        }

        return service;

        //////////////////////////

        function addItem(name, obj) {
            if (typeof (obj) === 'object') {
                localStorage.setItem(name, JSON.stringify(obj));
            } else {
                localStorage.setItem(name, obj);
            }
        }

        function getItem(name) {
            var retrievedObject = JSON.parse(localStorage.getItem(name));
            return retrievedObject;
        }
    });
})();
