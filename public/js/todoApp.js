(function() {
    'use strict';

    // definicao do modulo do app
    angular.module('TodoApp', ['ngRoute', 'angular-ladda']);

    // usa o modulo definido e configura as rotas
    angular.module('TodoApp').config(Config);
    
    // faz injecao do service $routeProvider na function Config 
    Config.$inject = ['$routeProvider'];
    
    // define as rotas
    function Config($routeProvider) {
        $routeProvider.
            when('/todos/:usuario', {
                templateUrl: 'pesquisa.html',
                controller: 'TodoPesquisaCtrl'
            }).
            when('/todos', {
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
                redirectTo: '/todos'
            });
    }
})();
