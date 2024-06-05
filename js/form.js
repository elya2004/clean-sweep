const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputPhone = document.querySelector('#input-phone');

const form = document.querySelector('#form');
const formInputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', function (event) {
    validateName(inputName.value);
    validateEmail(inputEmail.value);
    validatePhone(inputPhone.value);

    formInputs.forEach(function (formInput) {
        if (formInput.classList.contains('error')) {
            event.preventDefault();
        }
    })

});

inputName.addEventListener('input', function () {
    validateName(this.value);
});

inputEmail.addEventListener('input', function () {
    validateEmail(this.value);
});

inputPhone.addEventListener('input', function () {
    validatePhone(this.value);
});


function validateName(name) {
    const namePattern = /^[A-Za-z]{2,}$/;
    if (!namePattern.test(name)) {
        inputName.classList.add('error');
    } else {
        inputName.classList.remove('error');
    }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        inputEmail.classList.add('error');
    } else {
        inputEmail.classList.remove('error');
    }
}

function validatePhone(phone) {
    const phonePattern = /^(?:\+1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!phonePattern.test(phone)) {
        inputPhone.classList.add('error');
    } else {
        inputPhone.classList.remove('error');
    }
}