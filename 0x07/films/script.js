const fetchData= async (url)=> {
    try{

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error ! statusL ${response.status}`)
        }
        return await response.json()
    } catch(error){
        console.error('Error fetching film:', error)
        return null
    }
}


const data =await fetchData("https://swapi-api.alx-tools.com/api/films/")

const characters = await Promise.all (data.results[0]
    .characters.map(async (characterUrl)=>{
    const data = await fetchData(characterUrl)
    return data ? data.name : 'Unknown'
}))

const modifiedData = data.results.map((movie)=>{
    return{
        ...movie,
        characters
    }
})
const movieList = document.getElementById("movie-list")
console.log(modifiedData)
if(modifiedData){
    modifiedData.forEach((movie) => {
        const listItem = document.createElement('li')
        listItem.textContent=movie.title
        listItem.innerHTML+=
        `<br><strong>Characters:</strong>
        ${movie.characters.map((characterPromise)=> characterPromise).join(',')}`
        movieList.appendChild(listItem)
    })
}