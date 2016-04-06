(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoCadastroCtrl', TodoCadastroCtrl);
    
    TodoCadastroCtrl.$inject = ['$scope', '$http', '$routeParams'];
    
    function TodoCadastroCtrl($scope, $http, $routeParams) {
        
        $scope.id = $routeParams.id;
        $scope.todo = null;
        
        $scope.buscarPorId = function() {
            $http
                .get('/api/todo/' + $scope.id)
                .then(function (result) {
                    $scope.todo = result.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        
        $scope.salvar = function() {
            $http
                .post('/api/todo', $scope.todo)
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        
        $scope.excluir = function() {
            $http
                .delete('/api/todo/' + $scope.todo._id)
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        
        if ($scope.id) {
            $scope.buscarPorId();
        }
    }
})();
