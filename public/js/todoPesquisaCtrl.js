(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoPesquisaCtrl', TodoPesquisaCtrl);
    
    TodoPesquisaCtrl.$inject = ['$scope', '$http', '$routeParams'];
    
    function TodoPesquisaCtrl($scope, $http, $routeParams) {
        
        $scope.usuario = $routeParams.usuario;
        $scope.todos = null;
        
        $scope.listar = function () {
            $http
                .get('/api/todos/' + $scope.usuario)
                .then(function (result) {
                    $scope.todos = result.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        
        if ($scope.usuario) {
            $scope.listar();
        }
    }
})();
