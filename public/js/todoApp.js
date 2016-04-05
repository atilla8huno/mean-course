(function () {
    'use strict';
    
    angular.module('TodoApp', []);
})();

(function () {
    'use strict';
    
    angular.module('TodoApp').controller('TodoCtrl', function TodoCtrl($scope) {
        
        $scope.name = 'Átilla';
        
    });
})();