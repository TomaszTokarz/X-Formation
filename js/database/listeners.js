runListeners = function(scope, table) {
  firebase.database().ref('employees').on('child_added', function(snapshot) {
      table.push(snapshot.val());
      scope.$apply();
  });
}
