
async function newPostHandler(event) {
    event.preventDefault()
    console.log("clicked")
    const title = document.getElementById("project-name").value.trim()
    const description = document.getElementById("project-desc").value.trim()

    if (title && description) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title, description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            document.location.replace("/dashboard")
        } else {
            alert("Failed to create post.")
        }
    }
}

document.querySelector(".new-project-form").addEventListener("submit", newPostHandler);