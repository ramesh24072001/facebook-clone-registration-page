// script.js
function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dobDay = document.getElementById('dobDay').value;
    const dobMonth = document.getElementById('dobMonth').value;
    const dobYear = document.getElementById('dobYear').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Prepare the data to be sent to the server
    const formData = {
        firstName,
        lastName,
        email,
        password,
        dobDay,
        dobMonth,
        dobYear,
        gender
    };

    // Send a POST request to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful:', data);
        // You can add additional logic here if needed
    })
    .catch(error => {
        console.error('Error during registration:', error);
        // Handle errors here if needed
    });
}