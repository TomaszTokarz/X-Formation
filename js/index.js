
(function(){
  
  var app = {
    init: function() {
      console.log('aaa', this);
      runController(this.appModule);
    },
    user: "Tomasz Tokarz",
    userRole: "User",
    appModule: angular.module("appModule", [])
  };

  app.init();
})();
