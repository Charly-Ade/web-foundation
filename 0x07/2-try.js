const fetchPost = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch(error){
        console.error('Error fetching post:', error)
    }
}


const data = await fetchPost('https://jsonplaceholder.typicode.com/posts')
const div = document.createElement('div')
div.classList.add('container')
div.innerHTML = `
     <h1 class="title">Posts</h1>

     <ul class="post-list">

        ${data.map(post => `
            <li class="post-card" data-id="${post.id}">

                <h2>${post.title}</h2>

                <p>${post.body}</p>

            </li>

        `).join('')}

    </ul>
`
document.body.appendChild(div)