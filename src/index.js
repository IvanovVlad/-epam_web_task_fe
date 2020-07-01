const signin = require('./js/auth/signin');
const signup = require('./js/auth/signup');
const getAllUsers = require('./js/auth/getAllUsers');

const inputLogin = document.querySelector('#login-text');
const inputPassword = document.querySelector('#password-text');
const signinButton = document.querySelector('#signin-btn');
const signupButton = document.querySelector('#signup-btn');

signinButton.addEventListener('click', () => signin.signIn(inputLogin.value, inputPassword.value));
signupButton.addEventListener('click', () => signup.signUp(inputLogin.value, inputPassword.value));