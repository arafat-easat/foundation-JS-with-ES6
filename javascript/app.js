const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

const displayPost = (posts) => {
    const postContainer = document.getElementById('postContainer');

    for (const post of posts) {
        console.log(post)

        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `<h1>AlArafat<h1/>
        <p>${post.body}<p/>
        `;

        postContainer.appendChild(div)
    }

}

handlePost()




const load = () => { 
    try {
        
    } catch (error) {
        
    }
}