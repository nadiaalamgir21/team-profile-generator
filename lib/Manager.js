const Employee = require("./Employee")

//manager class extends the main employee class for its method
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  // return the office number of the manager
  getOfficeNumber() {
    return this.officeNumber
  }
  // return the role of the manager
  getDesignation() {
    return "Manager"
  }
}

module.exports = Manager
