const  validate = () => {
    let errorMessages = [];

    if(document.getElementById('nm_btn').value == ""){
        errorMessages.push("* Enter your name")
    }
    if(document.getElementById('eml_btn').value == ""){
        errorMessages.push("* enter your email")
    }
    if(document.getElementById('message').value == ""){
        errorMessages.push("* Enter message")
    }

    document.getElementById('err_msg').innerText=errorMessages.join(", ")
}   

const form = document.querySelector('form');
const submitButton = document.querySelector('.submit');
const inputFields = document.querySelectorAll('.field');

form.addEventListener('submit', (e) =>{
    form.reset();
});



    








