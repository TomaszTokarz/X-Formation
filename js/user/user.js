// function loginController(module, userName, userRole) {
  angular.module("appModule", []).controller("User", function($scope, User) {
      $scope.name = User.name;
      $scope.role = User.role;
      $scope.altRole = "Administrator";
      $scope.toggleUserRole = function() {
        User.limitation = false;
        User.role = User.role == "User" ? "Administrator" : "User";
        $scope.role = User.role;
        var roleElement = document.querySelector(".edit_employee__attribute__input__role");
        var positionElement = document.querySelector(".edit_employee__attribute__input__role__position");
        if(User.role == "Administrator") {
          roleElement.removeAttribute("disabled");
          positionElement.removeAttribute("disabled");
        } else {
          roleElement.setAttribute("disabled", "disable");
          positionElement.setAttribute("disabled", "disable");
        };
      };
  });
// };
