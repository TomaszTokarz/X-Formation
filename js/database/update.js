saveEmployee = function(employee) {
  firebase.database().ref("employees/" + employee.id).set(employee);
}

deleteEmployee = function(employee) {
  firebase.database().ref("employees/" + employee.id).remove();
}
