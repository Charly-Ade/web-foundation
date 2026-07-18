/**
 * a file that fetch post from jsonplaceholder api
 * using fetch api
 */
const fetchPost = (url)=> {
    const response =fetch(url)
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error fetching post:', error)
    })

    return response
}

const data = fetchPost('https://jsonplaceholder.typicode.com/posts')
data.then(postData => console.log(postData))