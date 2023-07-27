async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="project-name"]').value;
    const description = document.querySelector('textarea[name="project-desc"]').value.trim();

    if (title && description) {
        const postId = event.target.attributes.data_id.value
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
                title, description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Failed to update post.");
        }
    }
}

async function deleteFormHandler(event) {
    event.preventDefault();

    const postId = event.target.attributes.data_id.value
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        body: JSON.stringify({
            id: postId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Failed to delete post.");
    }
}

document.querySelector('.update-btn').addEventListener('click', editFormHandler);
document.querySelector('.delete-btn').addEventListener('click', deleteFormHandler);