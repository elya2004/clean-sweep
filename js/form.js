const inputNames = document.querySelectorAll('.input-name');
const inputEmails = document.querySelectorAll('.input-email');
const inputPhones = document.querySelectorAll('.input-phone');
const forms = document.querySelectorAll('.form-validation');
const inputCompanyNames = document.querySelectorAll('.input-company-name');


// Обработка формы по клику на кнопку
forms.forEach(function (form) {

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        validateName(this.querySelector('.input-name'));
        validateEmail(this.querySelector('.input-email'));

        if (this.querySelector('.input-company-name')) {
            validateCompanyName(this.querySelector('.input-company-name'));
        }

        if (this.querySelector('.input-phone')) {
            validatePhone(this.querySelector('.input-phone'));
        }

        if (!this.querySelector('.form__input').classList.contains('error')) {
            alert('Форма отправлено! Грациас')
            document.querySelector('.popup-wrap').classList.remove('active');
            this.reset();
        }
    });

});

// Обработка имени при изменении поля
inputNames.forEach(function (inputName) {
    inputName.addEventListener('input', function () {
        validateName(this);
    });
});

// Обработка эмейла при изменении поля
inputEmails.forEach(function (inputEmail) {
    inputEmail.addEventListener('input', function () {
        validateEmail(this);
    });
});

// Обработка телефона при изменении поля
inputPhones.forEach(function (inputPhone) {
    inputPhone.addEventListener('input', function () {
        validatePhone(this);
    });
});

inputCompanyNames.forEach(function (inputCompanyName) {
    inputCompanyName.addEventListener('input', function () {
        validateCompanyName(this);
    });
});


// Функция для валидации имени
function validateName(input) {
    const namePattern = /^[A-Za-z]{2,}$/;

    if (!namePattern.test(input.value)) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

// Функция для валидации эмейла
function validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(input.value)) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

// Функция для валидации телефона
function validatePhone(input) {
    const phonePattern = /^(?:\+1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!phonePattern.test(input.value)) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

function validateCompanyName(input) {
    const companyNamePattern = /^(?:\+1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!companyNamePattern.test(input.value)) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}