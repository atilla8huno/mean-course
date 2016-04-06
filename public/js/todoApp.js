(function() {
    'use strict';

    angular.module('TodoApp', ['ngRoute']);

    angular.module('TodoApp').config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/todos/:usuario', {
                    templateUrl: 'pesquisa.html',
                    controller: 'TodoPesquisaCtrl'
                }).
                when('/todo/:id', {
                    templateUrl: 'cadastro.html',
                    controller: 'TodoCadastroCtrl'
                }).
                when('/todo', {
                    templateUrl: 'cadastro.html',
                    controller: 'TodoCadastroCtrl'
                }).
                otherwise({
                    redirectTo: '/todo'
                });
        }]);
})();
