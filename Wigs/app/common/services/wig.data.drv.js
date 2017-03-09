(function () {
    'use strict';

    angular
        .module('wig.services')
        .service('wigData', wigData);

    wigData.$inject = ['$http'];

    function wigData($http, $q) {
        var vm = this;
        vm.getData = getData;
        

    

        function getData() { }
    }
})();