//debugging!!
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    if (startButton) {
        console.log("Start button found!");
        startButton.addEventListener("click", function() {
            console.log("Start button clicked!");
            // Your game start logic here
            const gameIframe = document.getElementById("game-iframe");
            gameIframe.src = "https://scratch.mit.edu/projects/1092939317/embed";
            document.getElementById("iframe-container").style.display = "block";
        });
    } else {
        console.log("Start button not found.");
    }
});

//actual code

document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var dob = document.getElementById("date_of_birth").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var userId = document.getElementById("user_id").value;
    var password = document.getElementById("password").value;


    

    // Check which button was clicked (Register or Login)
    if (event.submitter.id === "register-button") {
        // Register logic
        var data = new FormData();
        data.append("first_name", firstName);
        data.append("last_name", lastName);
        data.append("date_of_birth", dob);
        data.append("email", email);
        data.append("username", username);
        data.append("user_id", userId);
        data.append("password", password);
        // let jsonData = JSON.stringify(data);
    // console.log (`${jsonData}`);

        fetch("/register.php", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Registration successful. Please log in.");
                window.location.href = "/frontend/login.html"; // Redirect to login page
            } else {
                alert("Registration failed: " + result.message);
            }
        })
        .catch(error => console.error("Error during registration:", error));
    } else if (event.submitter.id === "login-button") {
        // Login logic
        var data = new FormData();
        data.append("username", username);
        data.append("password", password);

        fetch("/login.php", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.loggedIn) {
                // Store session info (optional) and redirect to game
                localStorage.setItem("loggedIn", "true");
                window.location.href = "/frontend/index.html"; // Redirect to the game page
            } else {
                alert("Invalid login credentials. Please try again.");
            }
        })
        .catch(error => console.error("Error during login:", error));
    }
});

// For the game
// No need to check login in JS anymore, it's handled by PHP

// Load game when "start game" button is clicked
document.getElementById("start-button").addEventListener("click", function() {
    // Set the src attribute to load the Scratch game
    const gameIframe = document.getElementById("game-iframe");
    gameIframe.src = "https://scratch.mit.edu/projects/1092939317/embed";

    // Display the iframe container
    document.getElementById("iframe-container").style.display = "block";
});
// debugging!!!!!
script.js

// // Select the start button and iframe container
// const startButton = document.getElementById("start-button");
// const iframeContainer = document.getElementById("iframe-container");

// // Add an event listener to the start button
// startButton.addEventListener("click", function() {
//   // Hide the start button container
//   document.getElementById("start-b-container").style.display = "none";
  
//   // Show the iframe container
//   iframeContainer.style.display = "block";
// });