// require Manager
// require Intern
// require Engineer
// require inquirer

function createManager() {
  inquirer
    .prompt([
      {
        // question object
      },
    ])
    .then((answersObj) => {
      const manager = new Manager(answersObj.name, answers.id);
    });
}
