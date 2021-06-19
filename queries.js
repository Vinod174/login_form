// rest operator

// const arr = [1, 2, 4, 5, 10];
// const sum = (a, b, c, d, e, x, y) => {
//     return a + b + c + d + e;
// }

// sum(...arr);

// // copy
// const newArr = [...arr];
// newArr[2] = 10;

// const obj = {
//     name: "Alok Sharma",
//     isMarried: true,
//     address: {
//         pincode: 110045,
//         street: 3,
//     }
// }

// const newObj = {...obj, address: {...obj.address}};
// newObj.address.pincode = 100076;
// console.log(obj);
// console.log(newObj);

// const arr = [20, 53, 45, 67, 102, 20];
// console.log(Math.min(...arr));


// const arr = [1, 3, 4, 5 ,6];


// const isMarried = true;
// const key = "isMarried";

// const obj = {
//     name: "alok",
//     age: 26,
//     [key]: isMarried,
// }

// console.log(obj);


// const obj = {
//     name: "alok",
//     age: 46
// }

// // obj["name"]

// const changeValue = (value) => {
//     obj[key] = value;
// }

// changeValue("age",25);
// console.log(obj);




// const [x, y, ...z] = [1, 2, 4, 5, 6]
// console.log(x);
// console.log(y);
// console.log(z);

// const obj = {
//     firstName: "Alok",
//     age: 46,
//     isMarried: true
// }

// const {firstName, age, ...rest} = obj;

// console.log(firstName);
// console.log(age);

// console.log(rest);


// const greet1 = (name, age) => {

// }



// const greet2 = (obj) => {

// }



// const arr = [1, 2, 3, 4, 5];

// const doubleValue = (arr) => {
//     const newArr = arr.map((value) => value * 2);
//     return newArr; 
// }

// const valueGreaterThan = (arr, value) => {
//     const newArr = arr.filter(v => v >= value);
//     return newArr;
// } 

// const ageGreaterThan = (age, persons) => {
//     const areAdult = persons.filter(person => 20 > 15);
//     return areAdult;
// }

// const ageGreaterThanMap = (age, persons) => {
//     const areAdult = persons.map(person => {
//         if(person.age > age) {
//             return person;
//         }
//     });
//     return areAdult;
// }

// const persons = [{name: "Alok", age: 23}, {name: "Alok", age: 18}, {name: "Alok", age: 25}];

// // console.log(doubleValue(arr));
// // console.log(valueGreaterThan(arr, 3));
// console.log(ageGreaterThan(18, persons));
// console.log(ageGreaterThanMap(18, persons));

// const arr = [true, false, true , null, undefined];
// const truthy = arr.filter((value) => Boolean(value));

//Falsy
// undefined 
// null 
// false
// 0 
// ""


// const container = document.querySelector('.container');
// const userNameInput = document.querySelector(".username");
// const userNameError = document.querySelector(".username__error");
// const passwordInput = document.querySelector(".password");
// const passwordError = document.querySelector(".password__error");
// const button = document.querySelector(".button");
// const chButton = document.querySelector('.btn')

// const welcome = document.querySelector('.welcome');
// const welcomeName = document.querySelector('.welcome__user');
// const back = document.querySelector(".back")


// const togglePasswordVisibilty = () => {
//     if(passwordInput.type === "password"){
//         passwordInput.type = "text";
//     }else {
//         passwordInput.type = "password";
//     }
// }


// const resetErrorMessages = () => {
//     userNameError.textContent= "";
//     passwordError.textContent= "";
// }


// const resetWelcomeMessage = () => {
//     welcomeName.textContent = "";
// }

// const resetInputs = () => {
//     userNameInput.value = "";
//     passwordInput.value = "";
// }

// const areInputsValid = (userName, password) => {
//     let isValidInputs = true;

//     if (userName.length === 0) {
//         userNameError.textContent = "Username cannot be empty";
//         isValidInputs = false;
//     }

//     if(password.length === 0) {
//         passwordError.textContent = "Password cannot be empty";
//         isValidInputs = false;

//     }
//     else if (password.length < 8) {
//         passwordError.textContent = "Password should be atleast 8 characters long";
//         isValidInputs = false;
//     }
    

//     return isValidInputs;
// }



// button.addEventListener("click", () => {
//     resetWelcomeMessage();
//     resetErrorMessages();

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

// chButton.addEventListener('click' , togglePasswordVisibilty);

// back.addEventListener('click' , () => {
//     container.style.display = "block";
//     welcome.style.display = "none";
// })











