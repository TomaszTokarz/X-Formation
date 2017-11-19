runListeners = function(scope, table) {
  firebase.database().ref('employees').on('child_added', function(snapshot) {
      table.push(snapshot.val());
      scope.$apply();
  });
  firebase.database().ref('employees').on('child_changed', function(snapshot) {
      table[snapshot.val().id] = snapshot.val();
  });
}
