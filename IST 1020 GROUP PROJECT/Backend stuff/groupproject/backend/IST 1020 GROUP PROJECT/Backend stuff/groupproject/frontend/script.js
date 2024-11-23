// // document.addEventListener("DOMContentLoaded", function () {
    

// //     document.addEventListener("DOMContentLoaded", function () {
// //         // Handle form submission
// //         document.getElementById("login").addEventListener("submit", function (event) {
// //             event.preventDefault(); // Prevent form default behavior
    
// //             // Collect form data
// //             const firstName = document.getElementById("first-name").value;
// //             const lastName = document.getElementById("last-name").value;
// //             const dob = document.getElementById("D.O.B").value;
// //             const email = document.getElementById("email").value;
// //             const username = document.getElementById("username").value;
// //             const userId = document.getElementById("ID").value;
// //             const password = document.getElementById("password").value;
    
// //             // Check which button was clicked
// //             if (event.submitter.id === "register-button") {
// //                 // Register logic
// //                 const data = new FormData();
// //                 data.append("first_name", firstName);
// //                 data.append("last_name", lastName);
// //                 data.append("dob", dob);
// //                 data.append("email", email);
// //                 data.append("username", username);
// //                 data.append("user_id", userId);
// //                 data.append("password", password);
    
// //                 fetch("register.php", {
// //                     method: "POST",
// //                     body: data,
// //                 })
// //                     .then((response) => response.json())
// //                     .then((result) => {
// //                         if (result.success) {
// //                             alert("Registration successful. Please log in.");
// //                             window.location.href = "login.html"; // Redirect to login page
// //                         } else {
// //                             alert("Registration failed: " + result.message);
// //                         }
// //                     })
// //                     .catch((error) => console.error("Error during registration:", error));
// //             } else if (event.submitter.id === "login-button") {
// //                 // Login logic
// //                 const data = new FormData();
// //                 data.append("username", username);
// //                 data.append("password", password);
    
// //                 fetch("login.php", {
// //                     method: "POST",
// //                     body: data,
// //                 })
// //                     .then((response) => response.json())
// //                     .then((result) => {
// //                         if (result.loggedIn) {
// //                             // Store session info (optional) and redirect to the game
// //                             localStorage.setItem("loggedIn", "true");
// //                             window.location.href = "index.html"; // Redirect to the game page
// //                         } else {
// //                             alert("Invalid login credentials. Please try again.");
// //                         }
// //                     })
// //                     .catch((error) => console.error("Error during login:", error));
// //             }
// //         });
// //     });
// // Function to handle form submission
// document.getElementById("login").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Collect form data
//     const firstName = document.getElementById("first-name").value.trim();
//     const lastName = document.getElementById("last-name").value.trim();
//     const dob = document.getElementById("D.O.B").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const username = document.getElementById("username").value.trim();
//     const userId = document.getElementById("ID").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Check which button was clicked
//     if (event.submitter.id === "register-button") {
//         // Register user
//         const data = new FormData();
//         data.append("first_name", firstName);
//         data.append("last_name", lastName);
//         data.append("dob", dob);
//         data.append("email", email);
//         data.append("username", username);
//         data.append("user_id", userId);
//         data.append("password", password);

//         fetch("register.php", {
//             method: "POST",
//             body: data,
//         })
//             .then((response) => response.json())
//             .then((result) => {
//                 if (result.success) {
//                     alert("Registration successful! Please log in.");
//                     window.location.href = "login.html"; // Redirect to login page
//                 } else {
//                     alert("Registration failed: " + result.message);
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error during registration:", error);
//                 alert("An error occurred during registration.");
//             });
//     } else if (event.submitter.id === "login-button") {
//         // Log in user
//         const data = new FormData();
//         data.append("username", username);
//         data.append("password", password);

//         fetch("login.php", {
//             method: "POST",
//             body: data,
//         })
//             .then((response) => response.json())
//             .then((result) => {
//                 if (result.loggedIn) {
//                     localStorage.setItem("loggedIn", "true"); // Store login status
//                     window.location.href = "index.html"; // Redirect to the game page
//                 } else {
//                     alert("Invalid login credentials. Please try again.");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error during login:", error);
//                 alert("An error occurred during login.");
//             });
//     }
// });

// // Ensure user is logged in before accessing the game
// if (document.getElementById("start-button")) {
//     fetch("check-login.php") // Check session status
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.loggedIn !== true) {
//                 alert("You must be logged in to access this page.");
//                 window.location.href = "login.html"; // Redirect to login page
//             }
//         })
//         .catch((error) => {
//             console.error("Error checking login status:", error);
//         });

//     // Load the game when the "start game" button is clicked
//     document.getElementById("start-button").addEventListener("click", function () {
//         fetch("check-login.php")
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.loggedIn !== true) {
//                     alert("You must be logged in to access this game.");
//                     window.location.href = "login.html"; // Redirect to login page
//                 } else {
//                     // Display the iframe container
//                     document.getElementById("iframe-container").style.display = "block";
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error checking login status on start:", error);
//             });
//     });
// }
// debugging!!!!!
if (document.getElementById("start-button")) {
    console.log("Start button detected!");
}


document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("D.O.B").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var userId = document.getElementById("ID").value;
    var password = document.getElementById("password").value;

    // Check which button was clicked (Register or Login)
    if (event.submitter.id === "register-button") {
        // Register logic
        var data = new FormData();
        data.append("first_name", firstName);
        data.append("last_name", lastName);
        data.append("dob", dob);
        data.append("email", email);
        data.append("username", username);
        data.append("user_id", userId);
        data.append("password", password);

        fetch("register.php", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Registration successful. Please log in.");
                window.location.href = "login.html"; // Redirect to login page
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

        fetch("login.php", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.loggedIn) {
                // Store session info (optional) and redirect to game
                localStorage.setItem("loggedIn", "true");
                window.location.href = "game.html"; // Redirect to the game page
            } else {
                alert("Invalid login credentials. Please try again.");
            }
        })
        .catch(error => console.error("Error during login:", error));
    }
});
// For the game
// Ensure user is logged in before accessing the game
if (document.getElementById("start-button")) {

    // Check if user is logged in by sending a request to the server
    fetch('check-login.php')  // This PHP file checks the session status
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn !== true) {
                alert("You must be logged in to access this page.");
                window.location.href = "login.html"; // Redirect to login page if not logged in
            }
        })
        .catch(error => console.error('Error checking login status:', error));

    // Load game when "start game" button is clicked
    document.getElementById("start-button").addEventListener("click", function() {
        // Check if the user is logged in again when clicking start (just in case)
        fetch('check-login.php')  // Check session status again before starting the game
            .then(response => response.json())
            .then(data => {
                if (data.loggedIn !== true) {
                    alert("You must be logged in to access this game.");
                    window.location.href = "login.html"; // Redirect to login page if not logged in
                    return; // Exit early if not logged in
                }

                // Set the src attribute to load the Scratch game
                const gameIframe = document.getElementById("game-iframe");
                gameIframe.src = "https://scratch.mit.edu/projects/1092939317/embed";
                
                // Display the iframe container
                document.getElementById("iframe-container").style.display = "block";
            })
            .catch(error => console.error('Error checking login status on start:', error));
    });}
