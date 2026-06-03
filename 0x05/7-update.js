/**
 * update an object in collection
 * 
 */

const user = {
    name: "John Doe",
    location: "Check Point",
    age: 30,
    email: 'charlenwodo@gmail.com',
    socials: {
        facebook: 'charlesnwodo',
        Github: 'charly',
        instagram: 'charlesnwodo77'
    }
}

// update information
user['name'] = "Charles Nwodo"
user['location']  = "Check point, mararaba Nasarawa State"
console.log(user)
// update information using dot 
user.email = "charlesnwodo77@gmail.com"
console.log(user)

//update information in a nested objected

user.socials['Github'] = "charly-Ade"
console.log(user)

user['socials'].Github = "Charly-Ade"

console.log(user)