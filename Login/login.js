const form = document.getElementsByClassName("signup__form");
// deactivate 'create account' until all details have been filled in
document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("signup-email");
  const signUpButton = document.getElementById("signup-button");

  // make sure the password above is the same as the one below
//   const doPasswordsMatch = () => {
//     return passwordOne === passwordTwo;
//   };

  const isFormValid = () => {
    const isEmailValid = email.checkValidity();
    const isPasswordOneValid = passwordOne.checkValidity();
    const isPasswordTwoValid = passwordTwo.checkValidity();
    return (
      isEmailValid &&
      isPasswordOneValid &&
      isPasswordTwoValid 
    //   doPasswordsMatch()
    );
  };

  const updateButtonState = () => {
    signUpButton.disabled = !isFormValid();
  };

  email.addEventListener("input", updateButtonState);
  passwordOne.addEventListener("input", updateButtonState);
  passwordTwo.addEventListener("input", updateButtonState);

  updateButtonState();
//   form.addEventListener("submit", (go) => {
//     if (!doPasswordsMatch()) {
//       go.preventDefault();
//       alert("Your passwords do not match!");
//     }
//   });

});

// show passcode with clicking eye icon. could i implement for both password fields?
const showPassword = (logInPassword, passwordEye) => {
  const input = document.getElementById(logInPassword),
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

showPassword("login-pass", "password-eye");
