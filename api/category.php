<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");

    include 'DbConnection.php';
$db = new DbConnection;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];

        $sql = "SELECT * FROM categories";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $datas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $modifiedData = array_map(function($item) {
            $item["nom"] = $item["nomCat"];
            unset($item["nomCat"]);
            return $item;
        }, $datas);

        print_r(json_encode($modifiedData));
?>