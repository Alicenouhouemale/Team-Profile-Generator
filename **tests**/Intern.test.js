const { default: test } = require("node.test");
const { TestScheduler } = require("rxjs/testing");
const Intern = require("../lib/Intern");
// const intern = new Intern(
//   "Clarisse",
//   "77732",
//   "clarisse@gmail.com",
//   "Boston University"
// );
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

// Testing constructor values.
// test("test to get the constructor values for the employee object", () => {
//   expect(intern.name).toBe("Clarisse");
//   expect(intern.id).toBe("77732");
//   expect(intern.email).toBe("clarisse@gmail.com");
//   expect(intern.school).toBe("Boston University");
// });

// // Testing getName method.
// test("test to get the name from the getName() method", () => {
//   expect(intern.getName()).toBe("Clarisse");
// });

// // Testing getId method.
// test("test to get the id from the getId() method", () => {
//   expect(intern.getId()).toBe("77732");
// });

// // Testing getEmail method.
// test("test to get the email from getEmail() method", () => {
//   expect(intern.getEmail()).toBe("clarisse@gmail.com");
// });

// // Testing school method.
// test("test to get the github from getSchool() method", () => {
//   expect(intern.getSchool()).toBe("Boston University");
// });

// test("test to get the role from the getRole() method", () => {
//   expert(intern.getRole()).toBe("Intern");
// });
