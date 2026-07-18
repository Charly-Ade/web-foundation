const fetchPost = async (url)=> {
    const response =await fetch(url)
    const data = await response.json()

    return data
}

const data = await fetchPost('https://jsonplaceholder.typicode.com/posts')


console.log(data)