(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoCtrl', TodoCtrl);
    
    function TodoCtrl($scope) {
        
        $scope.name = 'Átilla';
        
    }
})();
