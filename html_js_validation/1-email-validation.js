function validateEmail(event) {
  event.preventDefault();
  
  const emailElement = document.querySelector("#email");
  const emailValue = emailElement?.value;

  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  const isValidEmail = emailRegex.test(emailValue);

  let emailErrorMessage = "";

  if (isValidEmail) {
    const form = document.querySelector('#emailForm');
    form?.submit();
  } else {
    emailErrorMessage = "Please enter a valid email address.";
  }

  const emailErrorElement = document.querySelector("#error");
  emailErrorElement.textContent = emailErrorMessage;
}

const submitBtn = document.querySelector("button[type=submit]");
submitBtn.addEventListener("click", validateEmail);