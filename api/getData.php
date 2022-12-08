<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

include 'DbConnection.php';
$db = new DbConnection;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];

$sql = "SELECT * FROM plat WHERE id = :id";
$path = explode('/', $_SERVER['REQUEST_URI']);

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $path[3]);
$stmt->execute();
$datas = $stmt->fetchAll(PDO::FETCH_ASSOC);

print_r(json_encode($datas));
?>