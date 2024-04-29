function logIn(username, password) {
  // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside

  if (username.length === 0 || password.length === 0) {
    return false;
  } else if (username === "austin" && password === "pass") {
    return true;
  } else {
    return false;
  }
}

function createAccount(username, password) {
  if (
    username.includes("@gmail.com" || "@hotmail.com" || "@yahoo.com") &&
    password.length !== 0
  ) {
    return true;
  } else if (username.length === 0 || password.length === 0) {
    return false;
  } else {
    return false;
  }
}

function googleLogIn(username) {
  if (username.includes("@gmail.com")) {
    return true;
  } else {
    return false;
  }
}

module.exports = { logIn, createAccount, googleLogIn };
