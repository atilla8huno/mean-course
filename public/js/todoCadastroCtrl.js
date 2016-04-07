(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoCadastroCtrl', TodoCadastroCtrl);
    
    TodoCadastroCtrl.$inject = ['$scope', '$http', '$routeParams'];
    
    function TodoCadastroCtrl($scope, $http, $routeParams) {
        
        $scope.id = $routeParams.id;
        $scope.todo = { finalizado: false };
        $scope.alert = null;
        
        $scope.buscarPorId = function() {
            $http
                .get('/api/todo/' + $scope.id)
                .then(function (result) {
                    $scope.todo = result.data;

                    $scope.alert = {
                        type: 'alert-info',
                        message: 'TODO do usuário ' + $scope.todo.usuario,
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
        
        $scope.salvar = function() {
            $http
                .post('/api/todo', $scope.todo)
                .then(function (result) {
                    console.log(result);
                    
                    $scope.alert = {
                        type: 'alert-success',
                        message: result.data,
                        title: 'Tudo certo!'
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
        
        $scope.excluir = function() {
            $http
                .delete('/api/todo/' + $scope.todo._id)
                .then(function (result) {
                    console.log(result);
                    
                    $scope.alert = {
                        type: 'alert-success',
                        message: result.data,
                        title: 'Tudo certo!'
                    };
                    
                    $scope.todo = null;
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
        
        $scope.limpar = function() {
            $scope.todo = null;
            $scope.alert = null;
        }
        
        if ($scope.id) {
            $scope.buscarPorId();
        }
    }
})();
