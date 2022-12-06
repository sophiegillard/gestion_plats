<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");

    include 'DbConnection.php';
$db = new DbConnection;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT  nomCat FROM categories";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $datas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        print_r(json_encode($datas));
        break;

    // case "POST":
    //     $datas = json_decode(file_get_contents('php://input'));

}
?>