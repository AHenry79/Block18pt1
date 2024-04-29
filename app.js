// function createAccount() {}
function error() {
  document.getElementById("login").addEventListener("click", () => {
    const userValue = document.getElementById("user").value;
    const passValue = document.getElementById("pass").value;
    if (userValue.length === 0 || passValue.length === 0) {
      document.getElementById("notif").innerHTML =
        "Please enter correct username and password";
    } else if (userValue === "austin" && passValue === "pass") {
      document.getElementById("notif").innerHTML =
        "Login information entered successfully!";
    } else {
      document.getElementById("notif").innerHTML =
        "Please enter correct username and password";
    }
  });
}
error();

function create() {
  document.getElementById("createAcc").addEventListener("click", () => {
    const userValue = document.getElementById("user").value;
    const passValue = document.getElementById("pass").value;
    const validEmails = "@gmail.com" || "@yahoo.com" || "@hotmail.com";
    if (userValue.includes(validEmails) && passValue.length !== 0) {
      document.getElementById("notif").innerHTML =
        "Successfully created an account! Check your email for confirmation";
    } else {
      document.getElementById("notif").innerHTML =
        "Please enter a valid email and password";
    }
  });
}
create();
