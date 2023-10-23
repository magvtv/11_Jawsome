const form = document.getElementsByClassName("signup__form");
const passwordOne = document.getElementById("signup-pass1");
const passwordTwo = document.getElementById("signup-pass2");
// deactivate 'create account' until all details have been filled in
document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("signup-email");
  const signUpButton = document.getElementById("signup-button");

  // make sure the password above is the same as the one below
  const doPasswordsMatch = () => {
    const passwordOneValue = passwordOne.value.trim()
    const passwordTwoValue = passwordTwo.value.trim();

    if (passwordOneValue === '' || passwordTwoValue === '') {
      return false
    }

    return passwordOneValue === passwordTwoValue;
  };

  const isFormValid = () => {
    const isEmailValid = email.checkValidity();
    const isPasswordOneValid = passwordOne.checkValidity();
    const isPasswordTwoValid = passwordTwo.checkValidity();
    return (
      isEmailValid &&
      isPasswordOneValid &&
      isPasswordTwoValid &&
      doPasswordsMatch()
    );
  };

  const updateButtonState = () => {
    signUpButton.disabled = !isFormValid();
  };

  email.addEventListener("input", updateButtonState);
  passwordOne.addEventListener("input", updateButtonState);
  passwordTwo.addEventListener("input", updateButtonState);

  form.addEventListener("submit", (go) => {
    if (!doPasswordsMatch()) {
      go.preventDefault();
      alert("Your passwords do not match!");
    }
  });
});

// show passcode with clicking eye icon. could i implement for both password fields?
const showPassword = (signUpPassword, passwordEye) => {
  const input = document.getElementById(signUpPassword),
    eyeIcon = document.getElementById(passwordEye);

  eyeIcon.addEventListener("click", () => {
    // change the password to plain text
    if (input.type === "password") {
      input.type = "text";
      eyeIcon.classList.add("ri-eye-close-line");
      eyeIcon.classList.remove("ri-eye-line");
    } else {
      input.type = "password";
      eyeIcon.classList.add("ri-eye-line");
      eyeIcon.classList.remove("ri-eye-close-line");
    }
  });
};

showPassword("signup-pass1", "password-eye1");
showPassword("signup-pass2", "password-eye2");
