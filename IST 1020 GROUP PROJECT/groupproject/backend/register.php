

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
    if (isset($_POST['username'], $_POST['password'], $_POST['email'], $_POST['user_id'])) {
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

        if ($result->num_rows > 0) {
            echo json_encode(["success" => false, "message" => "Username already taken!"]);
            $stmt->close();
            $conn->close();
            exit();
        }

        $stmt->close();

        // Hash the password before storing
        $password_hash = password_hash($password, PASSWORD_BCRYPT);

        $query = "INSERT INTO users (user_id, username, password_hash, email, first_name, last_name, date_of_birth) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("issssss", $user_id, $username, $password_hash, $email, $first_name, $last_name, $date_of_birth);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Registration successful!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "Please fill in all required fields (user_id, username, password, email)."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}

$conn->close();
?>
