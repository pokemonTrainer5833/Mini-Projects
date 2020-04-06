//get the dom elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passverify');
const lengthInput = document.querySelectorAll('[data-length]');

//function to add the error classes
const errorMessage = (type, message) => {
  const parent = type.parentElement;
  parent.classList.remove('success');
  parent.classList.add('error');
  const small = parent.querySelector('small');
  small.innerText = `${firstAlphabetUppercase(message)} required`;
};
//function to add the success message
const success = (type) => {
  const parent = type.parentElement;
  parent.classList.remove('error');
  parent.classList.add('success');
};

//convert first to uppercase function
const firstAlphabetUppercase = (message) =>
  message.charAt(0).toUpperCase() + message.slice(1);
//function to verify if all inputs are filled
const verifyNotEmpty = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value === '') {
      errorMessage(input, input.id);
    } else {
      success(input);
    }
  });
};
//function to chek email validity
const validateEmail = () => {
  const value = email.value;
  const parent = email.parentElement;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(value).toLowerCase())) {
    parent.classList.remove('success');
    parent.classList.add('error');
    const small = parent.querySelector('small');
    small.innerText = 'Email not valid';
  } else {
    parent.classList.remove('error');
    parent.classList.add('success');
  }
};
//function to check if the password match and are of valid length
const validatePasswords = (arr) => {
  const pass1 = arr[0];
  const pass2 = arr[1];

  if (
    !(
      pass1.value !== '' &&
      pass2.value !== '' &&
      pass1.value.trim() == pass2.value.trim()
    )
  ) {
    let parent = arr[1].parentElement;
    parent.classList.remove('success');
    parent.classList.add('error');
    let small = parent.querySelector('small');
    small.innerText = 'Passwords do not match';
  }
};
//return message
const returnMessage = (length) =>
  length === '7'
    ? 'Passwords must be at least 7 digits'
    : 'Username must be of 3 digits';

//function to check the length of the fields
const lengthChecker = (input, length) => {
  const parent = input.parentElement;
  if (parseInt(input.dataset.length) > parseInt(length)) {
    const parent = input.parentElement;
    parent.classList.remove('success');
    parent.classList.add('error');
    const small = parent.querySelector('small');
    small.innerText = `${returnMessage(input.dataset.length)}`;
  } else {
    parent.classList.remove('error');
    parent.classList.add('success');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  verifyNotEmpty([username, email, password, password2]);
  validatePasswords([password, password2]);
});

lengthInput.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    lengthChecker(input, e.target.value.length);
  });
});
