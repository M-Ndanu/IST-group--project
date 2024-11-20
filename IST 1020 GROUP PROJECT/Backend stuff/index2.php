<?php

include 'db.php';

$sql = "SELECT * FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        
        $user_id = isset($row["User_ID"]) ? $row["User_ID"] : (isset($row["ID"]) ? $row["ID"] : 'Unknown ID');
        
        
        echo "<li>(" . $row["username"] . ") " . $row["email"] . " " . $row["password_hash"] . " " . $user_id . " " . $row["first_name"] . " " . $row["last_name"] . " " . $row["date_of_birth"] . "</li>";
    }
    echo "</ul>";
} else {
    echo "No users found.";
}

$conn->close();
?>
