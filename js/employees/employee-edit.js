function editEmployee(module) {
  module.controller("EditEmployee", function($scope, Employee, User) {
    $scope.employee = Employee;

    $scope.return = function() {
      var appElement = document.querySelector(".edit_employee");
      appElement.classList.add("ng-hide");
    };

    $scope.save = function() {
      saveEmployee(Employee);
      var appElement = document.querySelector(".edit_employee");
      appElement.classList.add("ng-hide");
    };

    $scope.delete = function() {
      var confirmation = confirm("Do you really want to delete this employee?");
      if (confirmation) {
        deleteEmployee(Employee);
        var appElement = document.querySelector(".edit_employee");
        appElement.classList.add("ng-hide");
      };
    };
  });
};

function runUserFactory(module) {
  module.factory("User", function(){
    return {
      name : "Oscar Bartling",
      role: "User"
    };
  });
};
