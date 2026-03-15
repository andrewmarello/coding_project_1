console.log(`Coding Project 1 - Andrew Marello`);

//Step 3: Use DOM event listeners
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const form = document.getElementById("feedbackForm");
const feedbackDisplay = document.getElementById("feedback-display");

commentsInput.addEventListener("input", function() {
    let length = commentsInput.value.length;
    charCount.textContent = `Character Count: ${length}`;
});

nameInput.addEventListener("mouseover", function(){
    nameInput.title = "Please enter your full name.";
});
nameInput.addEventListener("mouseout", function(){
    nameInput.title = "";
});
emailInput.addEventListener("mouseover", function(){
    emailInput.title = "Please enter a valid email address.";
});
emailInput.addEventListener("mouseout", function(){
    emailInput.title = "";
});
form.addEventListener("submit", function(event) {
    if(nameInput.value === "" || emailInput.value === "" || commentsInput.value === "") {
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
