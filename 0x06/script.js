const el = document.getElementById("one");

el.className = "cool";

const elements = document.getElementsByClassName("hot");
if (elements.length > 2) {

    const el = elements[2];
    el.className = "cool";
}