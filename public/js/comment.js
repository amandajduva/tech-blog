async function commentFormHandler(event) {
    event.preventDefault();

    const comment_description = document.querySelector('.comment-input').value;
    const userId = document.getElementById("userId").value;
    const  postId = document.getElementById('postId').value;

        console.log(comment_description, userId);
    if (comment_description && userId && postId) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                comment_description, 
                post_id: postId,
                user_id: userId
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

document.querySelector('.comment-btn').addEventListener('click', commentFormHandler);