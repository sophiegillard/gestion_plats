<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header( "Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");

    include 'DbConnection.php';
$db = new DbConnection;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT plat.id, libellee, prix, nomCat, nomFrn, checked FROM plat JOIN categories JOIN fournisseur ON plat.fournisseur = fournisseur.id AND plat.categorie = categories.id";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $datas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        print_r(json_encode($datas));
        break;

        case "POST":
            $datas = json_decode(file_get_contents('php://input'));
            // $sql = "INSERT INTO `plat` (`id`, `libellee`, `prix`, `fournisseur`, `categorie`) VALUES (NULL, :libellee, :prix, :fournisseur, :categorie)";
            $sql = "INSERT INTO `plat` (`id`, `libellee`, `prix`, `fournisseur`, `categorie`) VALUES (NULL, :libellee, :prix, (SELECT id from fournisseur WHERE nomFrn = :fournisseur), (SELECT id from categories WHERE nomCat = :categorie))" ;
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':libellee', $datas->libellee);
            $stmt->bindParam(':prix', $datas->prix);
            $stmt->bindParam(':fournisseur', $datas->fournisseur);
            $stmt->bindParam(':categorie', $datas->categorie);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            }
            echo json_encode($data);
            break;

        case "DELETE":
            $sql = "DELETE FROM `plat` WHERE `plat`.`id` = :id " ;
            $path = explode('/', $_SERVER['REQUEST_URI']);

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;

}
?>