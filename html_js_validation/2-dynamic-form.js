function generateInputFields(numFieldsCount) {
  const inputContainerDiv = document.querySelector("#inputContainer");

  for (let i = 0; i < numFieldsCount; i++) {
    const inputField = document.createElement("input");
    inputField.setAttribute("name", `field${i + 1}`);
    inputField.setAttribute("type", "text");
    inputContainerDiv.appendChild(inputField);
  }
}

const numFieldsElement = document.querySelector("select#numFields");

generateInputFields(numFieldsElement?.value)

numFieldsElement?.addEventListener("change", () => {
  const dynamicInputs = document.querySelectorAll("input");

  for (const dynamicInput of dynamicInputs) {
    dynamicInput.remove();
  }

  generateInputFields(numFieldsElement?.value);
});

function validateForm(event) {
  event.preventDefault();

  const errorElement = document.querySelector("#error");
  errorElement?.remove();

  const dynamicInputs = document.querySelectorAll("input");

  let errorMessage = "";

  for (const dynamicInput of dynamicInputs) {
    const dynamicInputValue = dynamicInput?.value;
    if (!dynamicInputValue?.trim()) {
      errorMessage = "Please fill in all the fields";
    } else {
      errorMessage = "";
    }
  }

  if (errorMessage) {
    const errorElement = document.createElement("p");
    errorElement.setAttribute("id", "error");
    errorElement.textContent = errorMessage;
    document.body.appendChild(errorElement);
  } else {
    const form = document.querySelector("#dynamicForm");
    form?.submit();
  }
}

const submitBtn = document.querySelector("button[type=submit]");
submitBtn.addEventListener("click", validateForm);
