const { default: test } = require("node.test");
const Manager = require("../lib/Manager");
// const manager = new Manager("Jordy", "22544", "jordy@gmail.com", "12");

test("Create officeNumber", () => {
  const val = "officeNumber";
  const e = new Manager("name", "id", "email", val);
  expect(e.officeNumber).toBe(val);
});

test('getRole() returns "Manager"', () => {
  const val = "Manager";
  const e = new Manager("name", "id", "email", "officeNumber");
  expect(e.getRole()).toBe(val);
});

test("getOfficeNumber() returns officeNumber", () => {
  const val = "officeNumber";
  const e = new Manager("name", "id", "email", val);
  expect(e.getOfficeNumber()).toBe(val);
});

// // Testing constructor values.
// test("test to get the constructor values for the employee object", () => {
//   expect(manager.name).toBe("Jordy");
//   expect(manager.id).toBe("22544");
//   expect(manager.email).toBe("jordy@gmail.com");
//   expect(manager.officeNumber).toBe("12");
// });

// // Testing getName method.
// test("test to get the name from the getName() method", () => {
//   expect(manager.getName()).toBe("Jordy");
// });

// // Testing getId method.
// test("test to get the id from the getId() method", () => {
//   expect(manager.getId()).toBe("22544");
// });

// // Testing getEmail method.
// test("test to get the email from getEmail() method", () => {
//   expect(manager.getEmail()).toBe("jordy@gmail.com");
// });

// // Testing officeNumber method.
// test("test to get the officeNumber from getOfficeNumber() method", () => {
//   expect(manager.officeNumber()).toBe("12");
// });

// test("test to get the role from the getRole() method", () => {
//   expert(manager.getRole()).toBe("Manager");
// });
