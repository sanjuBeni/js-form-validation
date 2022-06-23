// import { greet, message } from "./validation.js"; 


let name = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let phone = document.querySelector("#phone");

name.addEventListener('blur', () => {

    if (validName(name.value)) {
        name.classList.remove('is-invalid');
    } else {
        name.classList.add('is-invalid');
        let nameErr = document.querySelector('#nameErr');
        let text = "*Username must by 5-30 characters long and should allowed only alphabet.";
        nameErr.innerText = text;
        nameErr.classList.add('invalid-feedback')
    }
});

email.addEventListener('blur', () => {

    if (validEmail(email.value)) {
        email.classList.remove('is-invalid');
    } else {
        email.classList.add('is-invalid');
        let emailErr = document.querySelector("#emailErr");
        let text = '*Enter a valid email address.';
        emailErr.innerText = text;
        emailErr.classList.add('invalid-feedback');
    }
});

phone.addEventListener('blur', () => {
    if (validPhone(phone.value)) {
        phone.classList.remove('is-invalid');
    } else {
        phone.classList.add('is-invalid');
        let phoneErr = document.querySelector('#phoneErr');
        phoneErr.innerText = '*Only 10 digit number alloed.';
        phoneErr.classList.add('invalid-feedback');
    }
});

pass.addEventListener('blur', () => {
    if (validPassword(pass.value)) {
        pass.classList.remove('is-invalid');
    } else {
        pass.classList.add('is-invalid');
        let passErr = document.querySelector('#passErr');
        passErr.innerText = `*Password should contain atleast one number and one special character and Your password must be at least 8 characters.`;
        passErr.classList.add('invalid-feedback');
    }
});

function validName(name) {
    const regex = /^[a-zA-Z ]{5,30}$/;
    return regex.test(name);
}

function validEmail(email) {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}

function validPassword(pass) {
    const regex = /^[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return regex.test(pass);
}

function validPhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}