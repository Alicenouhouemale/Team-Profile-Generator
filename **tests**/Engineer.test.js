const Engineer = require("../lib/Engineer");

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
