const elNote = document.getElementById("note")
const elClose = document.getElementById('close');

function dismissNote() { 
    document.body.removeChild(elNote);
    elClose.className = "hide"
}


elClose.addEventListener('click', dismissNote, false)
