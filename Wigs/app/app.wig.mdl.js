(function () {
    'use strict';
    angular.module('wig.home', []);
    angular.module('wig.directives', []);
    angular.module('wig.list', []);
    angular.module('wig.set', []);
    angular.module('wig.services', []);
    angular.module('wigApp', [
        // Angular modules 
        'ngRoute',
        // Custom modules 
        'wig.home',
        'wig.list',
        'wig.set',
        'wig.services',
        'wig.directives'
    ]).run(['$rootScope', 'wigData', function ($rootScope, wigData) {
        $rootScope.logoMessage = "Goldi G";
        $rootScope.headerMessage = "גולדי גריינמן -פאות בסטייל שלך";
    }]);
})();