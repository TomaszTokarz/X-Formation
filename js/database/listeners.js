runListeners = function(scope, table) {
  firebase.database().ref('employees').on('child_added', function(snapshot) {
    table.push(snapshot.val());
    scope.$apply();
  });

  firebase.database().ref('employees').on('child_changed', function(snapshot) {
    for(var i=0; i<table.length; i++) {
      if(table[i].id == snapshot.val().id) {
        table[i] = snapshot.val();
      }
    }
  });

  firebase.database().ref('employees').on('child_removed', function(snapshot) {
    for(var i=0; i<table.length; i++) {
      if(table[i].id == snapshot.val().id) {
        table.splice(i, 1);
      }
    }
  });
}
