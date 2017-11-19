  var app = {
    appModule: angular.module("appModule", []),
    init: function() {
      runController(this.appModule);
      runEmployeeFactory(this.appModule);
      // loginController(this.appModule, this.user, this.userRole);
      editEmployee(this.appModule);
      runUserFactory(this.appModule);
    }
  };

(function() {
  app.init();
})();
