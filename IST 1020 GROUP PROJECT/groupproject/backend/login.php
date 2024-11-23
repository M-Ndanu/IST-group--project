<?php
$servername = "mysql-db";
$username = "user"; 
$password = "user_password";  
$dbname = "scratch_database";  

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM users WHERE username = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            echo json_encode(["success" => false, "message" => "Invalid username or password!"]);
            exit();
        }

        $row = $result->fetch_assoc();
        $stored_hash = $row['password_hash'];

        if (password_verify($password, $stored_hash)) {
            echo json_encode(["success" => true, "loggedIn" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid username or password!"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "Please fill in both username and password fields."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}

$conn->close();
?>
