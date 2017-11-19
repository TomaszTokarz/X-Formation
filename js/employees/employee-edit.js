function editEmployee(module) {
  module.controller("EditEmployee", function($scope, Employee) {
    $scope.employee = Employee;
    $scope.adminPermission = app.userRole;

    $scope.return = function() {
      var appElement = document.querySelector('.edit_employee');
      appElement.classList.add("ng-hide");
    };

    $scope.save = function() {
      saveEmployee(Employee);
      var appElement = document.querySelector('.edit_employee');
      appElement.classList.add("ng-hide");
    };

    $scope.delete = function() {
      var confirmation = confirm("Do you realy want to delete this employee?");
      if (confirmation){
        deleteEmployee(Employee);
        var appElement = document.querySelector('.edit_employee');
        appElement.classList.add("ng-hide");
      };
    };
  });
};
