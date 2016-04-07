(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoPesquisaCtrl', TodoPesquisaCtrl);
    
    TodoPesquisaCtrl.$inject = ['$scope', '$http', '$routeParams'];
    
    function TodoPesquisaCtrl($scope, $http, $routeParams) {
        
        $scope.usuario = $routeParams.usuario;
        $scope.todos = null;
        $scope.alert = null;
        $scope.loading = false;
        
        $scope.listar = function() {
            $scope.loading = true;
            $http
                .get('/api/todos/' + $scope.usuario)
                .then(function (result) {
                    $scope.todos = result.data;
                    $scope.loading = false;
                    $scope.alert = null;
                })
                .catch(function (err) {
                    console.log(err);
                    $scope.loading = false;
                    $scope.alert = {
                        type: 'alert-danger',
                        message: err.data,
                        title: 'Erro!'
                    };
                });
        }
        
        $scope.getTodos = function() {
            return $scope.todos;
        }
        
        $scope.limpar = function() {
            $scope.usuario = null;
            $scope.todos = null;
        }
        
        if ($scope.usuario) {
            $scope.listar();
        }
    }
})();
