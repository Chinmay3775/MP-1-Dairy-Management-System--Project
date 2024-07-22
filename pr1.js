// script.js
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const farmerName = document.getElementById('farmer-name').value;
    const farmName = document.getElementById('farm-name').value;
    const location = document.getElementById('location').value;
    const livestockType = document.getElementById('livestock-type').value;
    const milkProductionCapacity = document.getElementById('milk-production-capacity').value;
    const otherDetails = document.getElementById('other-details').value;

    // Send registration data to server
    fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            farmerName,
            farmName,
            location,
            livestockType,
            milkProductionCapacity,
            otherDetails,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login credentials to server
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});