const Intern = require("../lib/Intern");

test("Create school", () => {
  const val = "school";
  const e = new Intern("name", 1, "email@email.com", val);
  expect(e.school).toBe(val);
});

test('getRole() returns "Intern"', () => {
  const val = "Intern";
  const e = new Intern("name", 1, "email@email.com", "school");
  expect(e.getRole()).toBe(val);
});

test("getSchool() returns school name", () => {
  const val = "school";
  const e = new Intern("name", 1, "email@email.com", val);
  expect(e.getSchool()).toBe(val);
});
