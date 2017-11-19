function runController(module) {
  module.controller("EmployeesList", function($scope, Employee) {
    $scope.employees = [];
    runListeners($scope, $scope.employees);
    $scope.isEdited = false;
    $scope.editUser = function(index, id) {

      for(var i=0; i<$scope.employees.length; i++) {
        if ($scope.employees[i].id == id){
          console.log($scope.employees[i].position != "Admin")
          if(app.userRole == "Administrator" || ($scope.employees[i].position != "Admin" && $scope.employees[i].position != "Manager" )){
            Employee.first_name = $scope.employees[i].first_name;
            Employee.last_name = $scope.employees[i].last_name;
            Employee.position = $scope.employees[i].position;
            Employee.role = $scope.employees[i].role;
            Employee.experience = $scope.employees[i].experience;
            Employee.short_description = $scope.employees[i].short_description;
            Employee.long_description = $scope.employees[i].long_description;
            Employee.id = id;
            editEmployee(app.appModule);
            var appElement = document.querySelector('.edit_employee');
            appElement.classList.remove("ng-hide");

          } else {
            alert("You have no permission to edit and delete this positions")
          }
        }
      }

    }

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
