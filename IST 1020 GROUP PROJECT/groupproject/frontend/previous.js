// // For the game
// // Ensure user is logged in before accessing the game
// if (document.getElementById("start-button")) {

//     // Check if user is logged in by sending a request to the server
//     fetch('check-login.php')  // This PHP file checks the session status
//         .then(response => response.json())
//         .then(data => {
//             if (data.loggedIn !== true) {
//                 alert("You must be logged in to access this page.");
//                 window.location.href = "login.html"; // Redirect to login page if not logged in
//             }
//         })
//         .catch(error => console.error('Error checking login status:', error));

//     // Load game when "start game" button is clicked
//     document.getElementById("start-button").addEventListener("click", function() {
//         // Check if the user is logged in again when clicking start (just in case)
//         fetch('check-login.php')  // Check session status again before starting the game
//             .then(response => response.json())
//             .then(data => {
//                 if (data.loggedIn !== true) {
//                     alert("You must be logged in to access this game.");
//                     window.location.href = "http://localhost:8080/frontend/index.html"; // Redirect to login page if not logged in
//                     return; // Exit early if not logged in
//                 }

//                 // Set the src attribute to load the Scratch game
//                 const gameIframe = document.getElementById("game-iframe");
//                 gameIframe.src = "https://scratch.mit.edu/projects/1092939317/embed";
                
//                 // Display the iframe container
//                 document.getElementById("iframe-container").style.display = "block";
//             })
//             .catch(error => console.error('Error checking login status on start:', error));
//     });}