const Employee = require("../lib/Employee");
const employee = new Employee("Alice", "00150", "alicenouhouemale@gmail.com");

// Testing constructor values.
test("test to get the constructor values for the employee object", () => {
  expect(employee.name).toBe("Alice");
  expect(employee.id).toBe("00150");
  expect(employee.email).toBe("alicenouhouemale@gmail.com");
});

// Testing getName method.
test("test to get the name from the getName() method", () => {
  expect(employee.getName()).toBe("Alice");
});

// Testing getId method.
test("test to get the id from the getId() method", () => {
  expect(employee.getId()).toBe("00150");
});

// Testing getEmail method.
test("test to get the email from getEmail() method", () => {
  expect(employee.getEmail()).toBe("alicenouhouemale@gmail.com");
});

test("test to get the role from the getRole() method", () => {
  expert(employee.getRole()).toBe("Employee");
});
