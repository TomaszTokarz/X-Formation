saveEmployee = function(employee) {
  firebase.database().ref('employees/' + employee.id).set(employee);
}
