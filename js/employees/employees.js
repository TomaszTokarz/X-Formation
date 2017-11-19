function runController(module) {
  module.controller("EmployeesList", function($scope, Employee) {
    $scope.employees = [];
    runListeners($scope, $scope.employees);
    $scope.isEdited = false;
    $scope.editUser = function(index) {
      Employee.first_name = $scope.employees[index].first_name;
      Employee.last_name = $scope.employees[index].last_name;
      Employee.position = $scope.employees[index].position;
      Employee.role = $scope.employees[index].role;
      Employee.experience = $scope.employees[index].experience;
      Employee.short_description = $scope.employees[index].short_description;
      Employee.long_description = $scope.employees[index].long_description;
      Employee.id = index;
      editEmployee(app.appModule);
      var appElement = document.querySelector('.edit_employee');
      appElement.classList.remove("ng-hide");
    }

  });
};

function editEmployee(module) {
  module.controller("EditEmployee", function($scope, Employee) {
    $scope.employee = Employee;

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

    };
  });
};

function runEmployeeFactory(module) {
  module.factory('Employee', function(){
    return {
      first_name : "",
      last_name : "",
      position : "",
      role : "",
      experience : "",
      short_description : "",
      long_description : "",
      id : ""
    };
  });
}
