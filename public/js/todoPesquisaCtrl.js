(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoPesquisaCtrl', TodoPesquisaCtrl);
    
    TodoPesquisaCtrl.$inject = ['$scope', '$http', '$routeParams'];
    
    function TodoPesquisaCtrl($scope, $http, $routeParams) {
        
        $scope.usuario = $routeParams.usuario;
        $scope.todos = null;
        $scope.alert = null;
        
        $scope.listar = function() {
            $http
                .get('/api/todos/' + $scope.usuario)
                .then(function (result) {
                    $scope.todos = result.data;
                    
                    $scope.alert = {
                        type: 'alert-info',
                        message: 'Exibindo TODOs do usuário ' + $scope.usuario,
                        title: 'Info!'
                    };
                })
                .catch(function (err) {
                    console.log(err);
                    
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
