function handleFormSubmit(event) {
  event.preventDefault();

  const errorElement = document.querySelector("#error");
  const successElement = document.querySelector("#success");

  errorElement?.remove();
  successElement?.remove();

  const name = document.querySelector("#name")?.value;
  const email = document.querySelector("#email")?.value;

  let message = "";

  if (name?.trim() && email?.trim()) {
    message = "Form submitted successfully!";
  } else {
    message = "Please fill in all required fields";
  }

  if (message) {
    const successMsgElement = document.createElement("p");
    successMsgElement.setAttribute("id", "success");
    successMsgElement.textContent = message;
    document.body.appendChild(successMsgElement);
  } else {
    const errorMsgElement = document.createElement("p");
    errorMsgElement.setAttribute("id", "error");
    errorMsgElement.textContent = message;
    document.body.appendChild(errorMsgElement);
  }
}

const formElement = document.querySelector("#submitForm");
formElement.addEventListener("submit", handleFormSubmit);