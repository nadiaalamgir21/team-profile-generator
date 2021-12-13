// main employee class
class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
  //returns the employee name
  getEmployeeName() {
    return this.name
  }
  // returns the employee id
  getEmployeeId() {
    return this.id
  }
  // returns the employee email
  getEmployeeEmail() {
    return this.email
  }
  // returns the designation of the employee
  getDesignation() {
    return "Employee"
  }
}

module.exports = Employee
