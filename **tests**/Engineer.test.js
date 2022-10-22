const Employee = require("../lib/Engineer");
const employee = new Employee("Sena", "98115", "sena@gmail.com", "sena3045");

// Testing constructor values.
test("test to get the constructor values for the employee object", () => {
  expect(employee.name).toBe("Sena");
  expect(employee.id).toBe("98115");
  expect(employee.email).toBe("sena@gmail.com");
  expect(employee.github).toBe("sena3045");
});

// Testing getName method.
test("test to get the name from the getName() method", () => {
  expect(employee.getName()).toBe("Sena");
});

// Testing getId method.
test("test to get the id from the getId() method", () => {
  expect(employee.getId()).toBe("98115");
});

// Testing getEmail method.
test("test to get the email from getEmail() method", () => {
  expect(employee.getEmail()).toBe("sena@gmail.com");
});

// Testing github method.
test("test to get the github from getGithub() method", () => {
  expect(employee.getGithub()).toBe("sena3045");
});

test("test to get the role from the getRole() method", () => {
  expert(employee.getRole()).toBe("Engineer");
});
