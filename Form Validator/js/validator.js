//get the dom elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passverify');

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  verifyNotEmpty([username, email, password, password2]);
});
