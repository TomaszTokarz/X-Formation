  var app = {
    user: "Tomasz Tokarz",
    userRole: "User",
    appModule: angular.module("appModule", []),

    init: function() {

      runController(this.appModule);
      runEmployeeFactory(this.appModule);
      loginController(this.appModule, this.user, this.userRole);
      editEmployee(this.appModule);     
    }
  };

  app.init();
