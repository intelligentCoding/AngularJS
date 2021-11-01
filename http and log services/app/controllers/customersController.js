(function() {
    
    var CustomersController = function ($scope, $log, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.appSettings = appSettings;
        function init() {
            $scope.customers = customersFactory.getCustomers().success(function(customers){
                $scope.customers = customers;
            }).error(function(data, status, headers, config) {
                //handle error
                $log.log(data.error + ' ' + status)
            });
        }
        init();
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
    };
    
    CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());