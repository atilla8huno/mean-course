(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoCtrl', TodoCtrl);
    
    function TodoCtrl($scope, $http) {
        
        $scope.name = 'Átilla';
        $scope.todos = [];
        
        $scope.listar = function () {
            $http
                .get('/todo-app/api/todos/atilla')
                .then(function (result) {
                    $scope.todos = result.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
})();
