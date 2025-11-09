const nameInput = document.getElementById("nameInput")
const greeting = document.getElementById("greeting")

nameInput.addEventListener ("input", () =>{
    const name = nameInput.value.trim();
    if (name) {
        greeting.innerText = `Hello, ${name}`;
        greeting.style.color = "green";
        greeting.style.fontweight = "bold";
    } else {
        greeting.innerText = "Hello, friend";
        greeting.style.color = "black";
        greeting.style.fontweight = "normal";
    }
});

const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");

let boxSize = 150;

growBtn.addEventListener("click", () => {
    boxSize += 20;
    moodBox.style.width = boxSize + "px";
    moodBox.style.height = boxSize + "px";
}) 

shrinkBtn.addEventListener("click", () => {
    if (boxSize > 50) {
        boxSize -= 20
        moodBox.style.width = boxSize + "px";
        moodBox.style.height = boxSize + "px";
    }
});

const toggleMoodBtn = document.getElementById("toggleMoodBtn")
const secretBtn = document.getElementById("secretBtn")
const secret = document.getElementById("secret")

toggleMoodBtn.addEventListener ("click", () => {
    document.body.classList.toggle("night");
});

secretBtn.addEventListener ("click", () => {
    if (secret.style.display === "none") {
        secret.style.display = "block";
        secretBtn.innerText = "Hide Secret Message";
    } else {
        secret.style.display = "none";
        secretBtn.innerText = "Show Secret Message";
    }
});