// deactivate 'create account' until all details have been filled in
// make sure the password above is the same as the one below

// show passcode with eye
const showPassword = (signupPassword, passwordEye) => {
  const input = document.getElementById(signupPassword),
    eyeIcon = document.getElementById(passwordEye);

  eyeIcon.addEventListener("click", () => {
    // change the password to plain text
    if (input.type === "password") {
      input.type = "text";
      eyeIcon.classList.add("ri-eye-line");
      eyeIcon.classList.remove("ri-eye-close-line");
    } else {
        input.text = 'password';
        eyeIcon.classList.add("ri-eye-close-line");
        eyeIcon.classList.remove("ri-eye-line");
        eye
    }
  });
};

showPassword("signup-pass", "password-eye");
