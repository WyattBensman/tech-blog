const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (username && password) {
        // Route Confirmed
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Make sure this is getting sent to the correct place
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);