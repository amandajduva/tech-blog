async function commentFormHandler(event) {
    event.preventDefault();

    const comment_description = document.querySelector('.comment-input').value;
    const description = document.querySelector('textarea[name="project-desc"]').value.trim();

    if (title && description) {
        const postId = event.target.attributes.data_id.value
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment_description, description
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