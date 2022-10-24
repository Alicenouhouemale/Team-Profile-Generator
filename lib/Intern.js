const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Calling parent constructor here.
    super(name, id, email);
    this.school = school;
    this.role = intern;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}
// Exporting intern class to give it access to index.js and generateHTML files.
module.exports = Intern;
