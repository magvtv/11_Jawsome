const form = document.getElementsByClassName('login__form');
// deactivate 'create account' until all details have been filled in
document.addEventListener('DOMContentLoaded', () => {
	const email = document.getElementById('login-email');
	const password = document.getElementById('login-pass');
	const logInButton = document.getElementById('login-button');

	const isFormValid = () => {
		const isEmailValid = email.checkValidity();
		const isPasswordValid = password.checkValidity();
		return isEmailValid && isPasswordValid;
	};

	const updateButtonState = () => {
		logInButton.disabled = !isFormValid();
	};

	email.addEventListener('input', updateButtonState);
	password.addEventListener('input', updateButtonState);

	// updateButtonState();
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

	eyeIcon.addEventListener('click', () => {
		// change the password to plain text
		if (input.type === 'password') {
			input.type = 'text';
			eyeIcon.classList.add('ri-eye-close-line');
			eyeIcon.classList.remove('ri-eye-line');
		} else {
			input.type = 'password';
			eyeIcon.classList.add('ri-eye-line');
			eyeIcon.classList.remove('ri-eye-close-line');
		}
	});
};

<<<<<<< Updated upstream
showPassword("login-pass", "password-eye");

  const logInEmail = document.getElementById("login-email");
  const logInPassword = document.getElementById('login-pass')
  const logInButton = document.getElementById("login-button");


  const isFormValid = () => {
    const isEmailValid = logInEmail.checkValidity();
    const isPasswordValid = logInPassword.checkValidity();

    const isNotEmpty = (field) => {
      field.value.trim() !== ""
    }
    return (
      isEmailValid &&
      isPasswordValid &&
      isNotEmpty(logInEmail) &&
      isNotEmpty(logInPassword)
    );
  };

  const updateButtonState = () => {
    logInButton.disabled = !isFormValid();
  };

  logInEmail.addEventListener("input", updateButtonState);
  logInPassword.addEventListener("input", updateButtonState);

  const form = document.getElementsByClassName("login__form");
  form.addEventListener("submit", (go) => {
    if (!isFormValid()) {
      go.preventDefault();
      alert("Enter both password and email!");
    }
  });

});
=======
showPassword('login-pass', 'password-eye');
>>>>>>> Stashed changes
