// require inquirer
// require Engineer
// require Intern
// require Manager

const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function createManager() {
  inquirer
    .prompt([
      {
        // question object

        type: "input",
        name: "name",
        message: "What is your manager name?",
        validation: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Manager name!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "Id",
        message: "What is your Id?",
        validation: (Id) => {
          if (Id) {
            return true;
          } else {
            console.log("Please enter your Id!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validation: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        validation: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((answersObj) => {
      const manager = new Manager(
        answersObj.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
    });
}

const promptMenu = () => {
  return inquirer.prompt({
    input: "list",
    name: "menu",
    message: "Please choose the option which you would like to continue with:",
    choices: [
      "add an engineer",
      "add an intern",
      "add a manager",
      "finish building my team",
    ],
  });
};
