function validate() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const submitBtn = document.getElementById('submitBtn');

  // Check if any of the required fields are empty
  if (fname === "" || email === "" || message === "") {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

// Attach the validate function to the form's submit event
document.getElementById('myForm').addEventListener('submit', validate);