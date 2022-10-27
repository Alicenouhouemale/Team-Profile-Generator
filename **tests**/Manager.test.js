const Manager = require("../lib/Manager");

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
