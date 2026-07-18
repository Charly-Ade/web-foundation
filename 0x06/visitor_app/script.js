document.title = "Visitor App";

const counter = document.getElementById("counter");
const save = document.getElementById("save");
const reset = document.getElementById("reset");

const display = document.getElementsByTagName("h2")[0];

counter.addEventListener("click", () => {
    display.textContent = parseInt(display.textContent) + 1;
});
 reset.addEventListener("click", () => {
    display.textContent = "0";
});
save.addEventListener("click", () => {
    const count = display.textContent;
    const entry = document.createElement("p");
    entry.textContent = count;
    document.getElementById("entries").appendChild(entry);
    display.textContent = "0";
});
clear.addEventListener("click", () => {
    count = 0;
    entries.textContent = "";
});