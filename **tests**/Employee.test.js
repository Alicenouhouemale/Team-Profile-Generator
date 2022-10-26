const { default: test } = require("node:test");
const Employee = require("../lib/Employee");
// set AND get id
// set AND get email
// set name
test("Create an employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
// // Testing constructor values.
// test("test to get the constructor values for the employee object", () => {
//   expect(employee.name).toBe("Alice");
//   expect(employee.id).toBe("00150");
//   expect(employee.email).toBe("alicenouhouemale@gmail.com");
// });

// Testing getName method.
test("test to get the name from the getName() method", () => {
  const val = "name";
  const e = new Employee(val);
  expect(e.getName()).toBe(val);
});

// Testing getId method.
test("test to get the id from the getId() method", () => {
  const val = "Id";
  const e = new Employee(val);
  expect(e.getId()).toBe(val);
});

// Testing getEmail method.
test("test to get the email from getEmail() method", () => {
  const val = "Email";
  const e = new Employee(val);
  expect(e.getEmail()).toBe(val);
});

test("test to get the role from the getRole() method", () => {
  expert(employee.getRole()).toBe("Employee");
});
