const noteTitle = document.getElementById('note-title');
const buttons = document.getElementById('buttons');
const recordButton = document.getElementById('record');
const stopButton = document.getElementById('stop');
const status = document.getElementById('status');
const timer = document.getElementById('timer');
const recordings = document.getElementById('recordings');
const noteInput = document.getElementById('note-name')

let mediaRecorder = null;
let microphoneStream = null;
let audioChunks = [];
let elapsedSeconds = 0;
let timerId = null;

function writelabel() {
    const label = noteInput.value.trim();
    noteTitle.textContent = label || "AUDIO NOTE";
}

function setRecordState(state) {
    recordButton.dataset.state = state;
    recordButton.setAttribute('aria-pressed', state === "pause");
    recordButton.setAttribute('aria-label', state === "pause" ? "Pause recording" : "Start recording");
    recordButton.title = state === "pause" ? "Pause recording" : "Start recording";
}
function setStatus(message) {
    status.textContent = message;
}
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return (
        String(mins).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}
function updateTimer() {
    timer.value = formatTime(elapsedSeconds);
    timer.textContent = formatTime(elapsedSeconds);
}
function startTimer(reset) {
    if (reset) {
        elapsedSeconds = 0;
        updateTimer();
    }
    stopTimer();
    timerId = window.setInterval(()=> {
        elapsedSeconds++;
        updateTimer();
    },1000);
}
function stopTimer() {
    if(timerId){
        window.clearInterval(timerId);
        timerId = null;
    }
}
function getRecorderOptions(){
    const mimeType = "audio/webm;codecs=opus";

    if(window.MediaRecorder && MediaRecorder.isTypeSupported(mimeType)){
        return {mimeType};
    }   
    return{};
}
async function startRecording(){
    if(!navigator.mediaDevices|| !window.MediaRecorder) {
        setStatus("Recording unavaliable");
        return;
    }
    if (mediaRecorder && mediaRecorder.state === "paused"){
        mediaRecorder.resume();
        setRecordState("pause");
        startTimer(false);
        setStatus("Recording");
        return;
    }
    try {
    microphoneStream = await navigator.mediaDevices.getUserMedia({audio:true});
    console.log("Mic stream:", microphoneStream);
    console.log("Audio tracks:", microphoneStream.getAudioTracks());
    mediaRecorder = new MediaRecorder(microphoneStream, getRecorderOptions());
    audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event)=>{
        if(event.data.size > 0){
            audioChunks.push(event.data);
        }
    });

    mediaRecorder.addEventListener("stop", saveRecording);

        mediaRecorder.start(1000);
        setRecordState("pause");
        stopButton.disabled = false;
        startTimer(true);
        setStatus("Recording");   
    }catch(error){
        console.error(error);
        setRecordState("record");
        stopButton.disabled = true;
        setStatus(error.message);
    }
}

function pauseRecording(){
    if (!mediaRecorder|| mediaRecorder.state !=="recording"){
        return;
    }
    mediaRecorder.pause();
    setRecordState("record");
    stopTimer();
    setStatus("Paused");
}

function stopRecording(){

    if(!mediaRecorder || mediaRecorder.state === "inactive"){
        return;
    }

    mediaRecorder.stop();
    setRecordState("record");
    stopButton.disabled = true;
    stopTimer();
    setStatus("Saved");

    if(microphoneStream){
        microphoneStream.getTracks().forEach(track => track.stop());
        microphoneStream = null;
    }
}

function saveRecording(){

    const mimeType = mediaRecorder.mimeType || "audio/webm";
    const blob = new Blob(audioChunks,{type: mimeType});
    const audioUrl = URL.createObjectURL(blob);
    const noteName = noteInput.value.trim()|| "Audio note";
    const fileName = makeFileName(noteName, mimeType);
    
    recordings.querySelector(".empty-state")?.remove();

    const item = document.createElement("li");
    const header = document.createElement("div");
    const title = document.createElement("strong");
    const length = document.createElement("span");
    const audio = document.createElement("audio");
    const download = document.createElement("a");

    item.className = "recording-item";
    header.className = "recording-header";
    download.className = "download-link";

    title.textContent= noteName;
    length.textContent = formatTime(elapsedSeconds);
    audio.controls = true;
    audio.src = audioUrl;
    download.href = audioUrl;
    download.download = fileName;
    download.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d= "M12 3v12"></path>
            <path d= "m7 10 5 5 5-5"></path>
            <path d= "M5 21h14"></path>
        </svg>
        <span>Download</span>
    `;
    header.append(title, length);
    item.append(header,audio,download);
    recordings.prepend(item);
}
function makeFileName(name,mimeType) {
    const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")|| "audio-note";
    const extension = mimeType.includes("ogg") ? "ogg" : "webm";
    return `${safeName}.${extension}`;
}
noteInput.addEventListener("keyup", writelabel);
noteInput.addEventListener("input", writelabel);

buttons.addEventListener('click', (event)=> {
    const selectedButton = event.target.closest("button");
    if(!selectedButton || !buttons.contains(selectedButton) || selectedButton.disabled){
        return;
    }

    switch (selectedButton.id) {
        case "record":
            if(selectedButton.dataset.state === "record") {
                startRecording();
            }else{
                pauseRecording();
            }
            break;
            case "stop":
                stopRecording();
                break;
            default:
                break;
    }
});