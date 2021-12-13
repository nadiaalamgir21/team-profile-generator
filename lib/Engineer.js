const Employee = require("./Employee")

// below engineer class extends main employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
  // returns the github username
  getGithub() {
    return this.github
  }
  // returns the role or designation of the employee
  getDesignation() {
    return "Engineer"
  }
}

module.exports = Engineer
