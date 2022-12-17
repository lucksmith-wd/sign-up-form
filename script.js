const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password-conf');
const submitBtn = document.querySelector('button[form="sign-up-form"]')
password.addEventListener('blur', validatePassword)
confirmPassword.addEventListener('blur', validatePassword)

submitBtn.addEventListener('click', function(e) {
  if(password === "" || password.value !== confirmPassword.value) {
    e.preventDefault();
}
})

function validatePassword() {
  const errorMsg = document.querySelector('input[type="password"] + span');
  if (password.value !== "" && password.value === confirmPassword.value) {
    errorMsg.textContent = "";
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  } else if(!password.classList.contains('error')) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    errorMsg.textContent = "* Passwords do not match"
  }
}