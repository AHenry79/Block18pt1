// const { default: test } = require("node:test");
const { logIn, createAccount, googleLogIn } = require("../logintest.js");

test("was logging in successful?", () => {
  expect(logIn("austin", "")).toBeFalsy();
  expect(logIn("", "pass")).toBeFalsy();
  expect(logIn("", "")).toBeFalsy();
  expect(logIn("austin", "pass")).toBeTruthy();
});

test("can the user create an account?", () => {
  expect(createAccount("a", "")).toBeFalsy();
  expect(createAccount("", "a")).toBeFalsy();
  expect(createAccount("a", "a")).toBeFalsy();
  expect(createAccount("", "")).toBeFalsy();
  expect(createAccount("blah@gmail.com", "")).toBeFalsy();
  expect(createAccount("blah@gmail.com", "pass")).toBeTruthy();
});

test("would the user like to login using google?", () => {
  expect(googleLogIn("")).toBeFalsy();
  expect(googleLogIn("@hotmail.com")).toBeFalsy();
  expect(googleLogIn("a")).toBeFalsy();
  expect(googleLogIn("@gmail.com")).toBeTruthy();
});
