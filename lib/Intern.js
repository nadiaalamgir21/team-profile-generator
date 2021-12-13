const Employee = require("./Employee")

// intern class extends the main employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
  // returns the school of the intern
  getSchool() {
    return this.school
  }
  // returns the designation of the intern
  getDesignation() {
    return "Intern"
  }
}

module.exports = Intern
