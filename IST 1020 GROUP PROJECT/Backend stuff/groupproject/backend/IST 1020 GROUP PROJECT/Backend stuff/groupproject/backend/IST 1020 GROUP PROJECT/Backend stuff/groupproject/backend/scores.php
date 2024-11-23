<?php

include 'db.php';

$sql = "SELECT * FROM scores";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        echo "<li> (" . $row["score"] . ") (" . $row["User ID"] . ") " . $row["completion_time"] . "</li>";
    }
    echo "</ul>";
} else {
    echo "No scores found.";
}

$conn->close();
?>
