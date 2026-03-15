console.log(`Coding Project 1 - Andrew Marello`);

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const form = document.getElementById("feedbackForm");
const feedbackDisplay = document.getElementById("feedback-display");

form.addEventListener("mouseover", function(event){
    if (event.target.id === "name") {
        event.target.title = "Please enter your full name.";
    }
    if (event.target.id === "email") {
        event.target.title = "Please enter a valid email address.";
    }
    if (event.target.id === "comments") {
        event.target.title = "Please enter your comments or feedback.";
    }
});

form.addEventListener("mouseout", function(event){
    if (event.target.matches("input, textarea")) {
        event.target.title = "";
    }
});

form.addEventListener("input", function(event) {
    if (event.target.id === "comments") {
        let length = event.target.value.length;
        charCount.textContent = `Character Count: ${length}`;
    }
});

form.addEventListener("submit", function(event) {
    if (nameInput.value === "" || emailInput.value === "" || commentsInput.value === "") {
        event.preventDefault();
        alert("Fill out all fields before submitting!");
        return;
    }
event.preventDefault();
    const newEntry = document.createElement("p");
    newEntry.textContent = 
        "Name: " + nameInput.value +
        " | Email: " + emailInput.value +
        " | Comments: " + commentsInput.value;
    feedbackDisplay.appendChild(newEntry);
    form.reset();
    charCount.textContent = "Character Count: 0";
});

