// const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");
// const engineer = new Engineer("Sena", "98115", "sena@gmail.com", "sena3045");

test("Can set github account", () => {
  const val = "githubUsername";
  const e = new Engineer("name", 1, "email@email.com", val);
  expect(e.github).toBe(val);
});

test(`getRole returns 'Engineer'`, () => {
  const val = "Engineer";
  const e = new Engineer("name", 1, "email@email.com", "github");
  expect(e.getRole()).toBe(val);
});

// test to get github account via getGithub()
test("getGithub() returns github name", () => {
  const val = "github";
  const e = new Engineer("name", 1, "email@email.com", "github");
  expect(e.getGithub()).toBe(val);
});

// Testing constructor values.
// test("test to get the constructor values for the employee object", () => {
//   expect(engineer.name).toBe("Sena");
//   expect(engineer.id).toBe("98115");
//   expect(engineer.email).toBe("sena@gmail.com");
//   expect(engineer.github).toBe("sena3045");
// });

// // Testing getName method.
// test("test to get the name from the getName() method", () => {
//   expect(engineer.getName()).toBe("Sena");
// });

// // Testing getId method.
// test("test to get the id from the getId() method", () => {
//   expect(engineer.getId()).toBe("98115");
// });

// // Testing getEmail method.
// test("test to get the email from getEmail() method", () => {
//   expect(engineer.getEmail()).toBe("sena@gmail.com");
// });

// // Testing github method.
// test("test to get the github from getGithub() method", () => {
//   expect(engineer.getGithub()).toBe("sena3045");
// });

// test("test to get the role from the getRole() method", () => {
//   expert(engineer.getRole()).toBe("Engineer");
// });
