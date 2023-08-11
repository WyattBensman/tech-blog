const createFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#createTitle').value.trim();
    const content = document.querySelector('#createContent').value.trim();

    if (title && content) {
        // Change Route
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
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
    .querySelector('.createForm')
    .addEventListener('submit', createFormHandler);