function validatePassword() {
  let passwordErrorMessage = "";

  const passwordElement = document.querySelector("#password");
  const passwordValue = passwordElement?.value;

  if (!passwordValue || passwordValue.length < 8) {
    // at least 8 characters long
    passwordErrorMessage = "Password must be at least 8 characters long";
  } else if (passwordValue === passwordValue.toLowerCase()) {
    // at least one uppercase letter
    passwordErrorMessage =
      "Password must contain at least one uppercase letter";
  } else if (passwordValue === passwordValue.toUpperCase()) {
    // at least one lowercase letter
    passwordErrorMessage =
      "Password must contain at least one lowercase letter";
  } else if (!((/\d+/g).test(passwordValue))) {
    // at least one numeric digit
    passwordErrorMessage = "Password must contain at least one numeric digit";
  } else if (!(/[.!@#$%^&*]/.test(passwordValue))) {
    // at least one special character (e.g., !@#$%^&*)
    passwordErrorMessage = "Password must contain at least one special character (e.g., !@#$%^&*)";
  } else {
    passwordErrorMessage = "";
  }

  const passwordErrorElement = document.querySelector("#error");
  passwordErrorElement.textContent = passwordErrorMessage;

  if (!passwordErrorMessage) {
    // allow form submission
    const form = document.querySelector('#passwordForm');
    form?.submit();
  }
}

const submitBtn = document.querySelector("button[type=submit]");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  validatePassword();
});
