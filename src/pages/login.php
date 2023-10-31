<?php
// Handle CORS (Cross-Origin Resource Sharing) if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Read the JSON request data
$data = json_decode(file_get_contents("php://input"));

// Replace with your actual validation logic
$username = $data->username;
$password = $data->password;

// Check credentials (replace with your database check)
if ($username === 'user' && $password === 'password') {
    $response = json_encode(['message' => 'Login successful']);
} else {
    $response = json_encode(['error' => 'Invalid credentials']);
}

echo $response;
?>
