const text = document.getElementById("text-form");
const voiceSelect = document.getElementById("voice");
const speakBtn = document.getElementById("speak");
const stopBtn = document.getElementById("stop");
const nameTitle = document.getElementById("note-title")
const nameInput = document.getElementById("note-name")

let voices = [];

function writelabel() {
    const label = nameInput.value.trim();
    nameTitle.textContent = label || "Enter text name";
}
speakBtn.addEventListener("click",()=>{
    let speech = new SpeechSynthesisUtterance();
    speech.text = text.value;
    let selectedVoice =
    voices[voiceSelect.value];
    speech.voice = selectedVoice;
    speech.rate = 1;
    speech.pitch = 1;
    speechSynthesis.speak(speech);
});
