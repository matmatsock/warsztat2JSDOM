console.log('warsztat')

let form = document.getElementById('form')

const submitForm = (event) => {
    event.preventDefault();
    let firstname = document.querySelector('[name="fname"]');
    let lastname = document.querySelector('[name="lname"]');

    console.log(`imię: ${firstname.value}, Nazwisko: ${lastname.value}`);
};

form.addEventListener('submit', submitForm);

console.log(form)