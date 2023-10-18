const passwordOne = document.getElementById("signup-pass1");
const passwordTwo = document.getElementById("signup-pass2");
// deactivate 'create account' until all details have been filled in

document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("signup-email");
  const signUpButton = document.getElementById("signup-button");

  const isFormValid = () => {
    const isEmailValid = email.checkValidity();
    const isPasswordOneValid = passwordOne.checkValidity();
    const isPasswordTwoValid = passwordTwo.checkValidity();
    return isEmailValid && isPasswordOneValid && isPasswordTwoValid;
  };

  const updateButtonState = () => {
    signUpButton.disabled = !isFormValid();
  };

  email.addEventListener("input", updateButtonState);
  passwordOne.addEventListener("input", updateButtonState);
  passwordTwo.addEventListener("input", updateButtonState);

  updateButtonState();
});

// make sure the password above is the same as the one below

// show passcode with eye
const showPassword = (signUpPassword, passwordEye) => {
  const input = document.getElementById(signUpPassword),
    eyeIcon = document.getElementById(passwordEye);

  eyeIcon.addEventListener("click", () => {
    // change the password to plain text
    if (input.type === "password") {
      input.type = "text";
      eyeIcon.classList.add("ri-eye-line");
      eyeIcon.classList.remove("ri-eye-close-line");
    } else {
      input.type = "password";
      eyeIcon.classList.add("ri-eye-close-line");
      eyeIcon.classList.remove("ri-eye-line");
    }
  });
};

showPassword("signup-pass2", "password-eye");
