const feedback = document.getElementById('feedback')
const username = document.getElementById('username')
const password = document.getElementById('username')
/*
const checkUsername = (username) => {
    if (username.value.length <  5){
        feedback.textContent = 'Username is too short'
    } else {
        feedback.textContent = ''
    }
}*/

const checkUsername = (e, minLength) => {
    let target = e.target
    if (target.value.length < minLength) {
        feedback.textContent = 'Username is too short'
    }else{
        feedback.textContent = ''
    }
    
}

username.addEventListener('blur', function (e){
    checkUsername(e, 5)
})