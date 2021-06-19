// const container = document.querySelector('.container');
// const userNameInput = document.querySelector(".username");
// const userNameError = document.querySelector(".username__error");
// const passwordInput = document.querySelector(".password");
// const passwordError = document.querySelector(".password__error");
// const button = document.querySelector(".button");

// const welcome = document.querySelector('.welcome');
// const welcomeName = document.querySelector('.welcome__user');



// const areInputsValid = (userName, password) => {
//     let isValidInputs = true;

//     if (userName.length === 0) {
//         userNameError.textContent = "enter the username";
//         isValidInputs = false;
//     }

//     if(password.length === 0) {
//         passwordError.textContent = "enter the password";
//         isValidInputs = false;

//     }else if (passwordInput == iamthebest){
//         isValidInputs = true
//     }else {
//         passwordError.textContent = "invalid error"
//         isValidInputs = false
//     }
//     return isValidInputs;
// }

// button.addEventListener("click", () => {
//     const userName = userNameInput.value;
//     const password = passwordInput.value;

//     const isValid = areInputsValid(userName, password);

//     if(isValid) {
//         container.style.display = "none";
//         welcome.style.display = "block";
//         welcomeName.textContent = `Welcome, ${userName}`;
//         resetInputs();
//     }
// });

