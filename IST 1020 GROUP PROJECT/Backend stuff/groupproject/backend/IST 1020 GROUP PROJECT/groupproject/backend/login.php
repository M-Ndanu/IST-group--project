<?php
$servername = "mysql-db";
$username = "root"; 
$password = "";  
$dbname = "scratch_database";  

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email']; 
        $user_id = $_POST['user_id'];  
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $date_of_birth = $_POST['date_of_birth'];

        $query = "SELECT * FROM users WHERE username = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            echo "Invalid username or password!";
            exit();
        }

        $row = $result->fetch_assoc();
        $stored_hash = $row['password_hash'];

        if (password_verify($password, $stored_hash)) {
            echo "Login successful!";
        } else {
            echo "Invalid username or password!";
        }

        $stmt->close();
    } else {
        echo "Please fill in both username and password fields.";
    }
} else {
    echo "Invalid request method.";
}

$conn->close();
?>
