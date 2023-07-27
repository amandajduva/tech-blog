async function commentFormHandler(event) {
    event.preventDefault();

    const comment_description = document.querySelector('.comment-input').value;

    if (comment_description) {
        const postId = event.target.attributes.data_id.value
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment_description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert("Failed to update post.");
        }
    }
}

document.querySelector('.comment-btn').addEventListener('click', deleteFormHandler);