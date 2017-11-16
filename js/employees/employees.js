function runController(controller) {
    controller.controller("EmployeesList", function($scope) {
        $scope.employees = [];
        runListeners($scope, $scope.employees);
     });
}


