<?php
$servername = "mysql-db"; 
$username = "root";        
$password = "";            
$dbname = "scratch_database";  


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>