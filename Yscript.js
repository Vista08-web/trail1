document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector("form[action='/login']");
  const registerForm = document.querySelector("form[action='/register']");

  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (!username || !password) {
        event.preventDefault();
        alert("Please fill in all fields.");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!username || !email || !password) {
        event.preventDefault();
        alert("Please fill in all fields.");
      }
    });
  }
});

registerForm.addEventListener("submit", function(event) {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    event.preventDefault();
    alert("Please fill in all fields.");
  }
});