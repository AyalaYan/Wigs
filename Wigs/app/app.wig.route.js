(function () {
    'use strict';
    angular.module('wigApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
         .when('/home', {
             controller: 'homeController',
             templateUrl: 'core/home/home.tmpl.html',
             controllerAs: 'homeVm'
         })
               .when('/list', {
                   controller: 'wigListCtrl',
                   controllerAs: 'wigListVm',
                   templateUrl: 'contactsList/wigList.tpl.html'
               })
            .when('/set/', {
                controller: 'wigSetCtrl',
                templateUrl: 'setContacts/wigSet.tpl.html',
                controllerAs: 'wigSetVm'
            })

            .otherwise({
                redirectTo: '/home'
            });

    }]);

})();
