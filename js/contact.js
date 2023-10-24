const form = document.querySelector('form');
const submitButton = document.getElementById('submitBtn');
const inputFname = document.getElementById("fname");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

const fldsArray = [inputFname, inputEmail, inputMessage];
// console.log(fldsArray);

function checkForm(){
    let allFilled = true;
    fldsArray.forEach(field => {
        if(field.value.trim() ===""){
            allFilled=false;
        }
    });
    submitButton.disabled = !allFilled;
}

fldsArray.forEach(field =>{
    field.addEventListener("input", checkForm);
});

form.addEventListener('submit', (e) =>{
    form.reset();
});


// inputFname.addEventListener('keyup', (e) => {
//     submitButton.disabled = false;
//     const value = e.currentTarget.value;
//     if(value===""){
//         submitButton.disabled = true;
//     }
// });

// inputEmail.addEventListener('keyup', (e) => {
//     submitButton.disabled = false;
//     const value = e.currentTarget.value;
//     if(value===""){
//         submitButton.disabled = true;
//     }
// });

// inputMessage.addEventListener('keyup', (e) => {
//     submitButton.disabled = false;
//     const value = e.currentTarget.value;
//     if(value===""){
//         submitButton.disabled = true;
//     }
// });

// function vali(){
// if(inputFname.value===""|| inputEmail.value==="" || inputMessage===""){
//     submitButton.disabled = true;
// } else {
//     submitButton.disabled = false;
// };
// }
// form.addEventListener('keyup', vali);

// const fldsArray = [inputFname, inputEmail, inputMessage];
// // console.log(fldsArray);

// fldsArray.forEach(field => {
//     if(field.value ===""){
//         submitButton.disabled = true;
//     }else{
//         submitButton.disabled = false;
//     }
// });

// const  validate = () => {
//     let errorMessages = [];

//     if(document.getElementById('fname').value == ""){
//         errorMessages.push("* Enter your name")
//     }
//     if(document.getElementById('email').value == ""){
//         errorMessages.push("* enter your email")
//     }
//     if(document.getElementById('message').value == ""){
//         errorMessages.push("* Enter message")
//     }

//     document.getElementById('err_msg').innerText=errorMessages.join(", ")
// }   
    








