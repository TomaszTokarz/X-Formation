function loginController(module, userName, userRole) {
  module.controller("User", function($scope) {
      $scope.name = app.user;
      $scope.role = app.userRole;
      $scope.altRole = "Administrator";
      $scope.toggleUserRole = function() {
        $scope.altRole = $scope.role;
        app.userRole = app.userRole == 'User' ? 'Administrator' : 'User';
        $scope.role = app.userRole;
      };
  });
};
