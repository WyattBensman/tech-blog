const editFormHandler = async (event, postId) => {
    event.preventDefault();

    const title = document.querySelector('#editTitle').value.trim();
    const content = document.querySelector('#editContent').value.trim();

    if (title && content) {
        // Change Route
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to edit post.');
        }
    }
};

const deleteFormHandler = async (event, postId) => {
    event.preventDefault();

    // Change Route
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to edit post.');
    }
};

document
    .querySelector('.editForm')
    .addEventListener('submit', createFormHandler);

document
    .querySelector('#deletePost')
    .addEventListener('click', deleteFormHandler);