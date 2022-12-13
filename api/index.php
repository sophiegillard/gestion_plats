<?php
require '/Applications/MAMP/mesSites/gestion_plats/vendor/autoload.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header( "Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");

    include 'DbConnection.php';
$db = new DbConnection;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {


    case "GET":
        $currentPage = $_GET['currentPage'];
        // On détermine le nombre total d'articles//
        $sql = 'SELECT COUNT(*) AS nb_plat FROM `plat`';

        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch();

        $nbPlats = (int) $result['nb_plat'];

        // On détermine le nombre d'articles par page
        $parPage = 10;

        // On calcule le nombre de pages total
        $pages = ceil($nbPlats / $parPage);

        // Calcul du 1er article de la page
        $premier = ($currentPage * $parPage) - $parPage;


        $sql = "SELECT plat.id, libellee, prix, nomCat, nomFrn, checked FROM plat JOIN categories JOIN fournisseur ON plat.fournisseur = fournisseur.id AND plat.categorie = categories.id ORDER BY plat.id DESC LIMIT :premier, :parpage;";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':premier', $premier, PDO::PARAM_INT);
        $stmt->bindValue(':parpage', $parPage, PDO::PARAM_INT);
        $stmt->execute();
        $datas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        print_r(json_encode($datas));
        break;



    case "POST":
        $gump = new GUMP();

        /*Defining Rule array*/
        $rules = array(
                'libellee' => 'required|valid_name|max_len,100|min_len,3:libellee',
                'prix' => 'required|numeric',
                'fournisseur' => 'required|valid_name',
                'categorie' => 'required|valid_name'
        );

        $datas = json_decode(file_get_contents('php://input'), true);

        $validated_data = $gump->validate($datas, $rules);

        // If the data is valid, insert it into the database
        if($validated_data === true){
            $sql = "INSERT INTO `plat` (`id`, `libellee`, `prix`, `fournisseur`, `categorie`) 
                    VALUES (NULL, :libellee, :prix, (SELECT id from fournisseur WHERE nomFrn = :fournisseur), (SELECT id from categories WHERE nomCat = :categorie))" ;
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':libellee', $datas['libellee']);
            $stmt->bindParam(':prix', $datas['prix']);
            $stmt->bindParam(':fournisseur', $datas['fournisseur']);
            $stmt->bindParam(':categorie', $datas['categorie']);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            }
            echo json_encode($data);
        }else {
            $errors = $gump->get_errors_array();
            echo "The following errors occurred: <br>";
            foreach($errors as $error) {
                echo $error . "<br>";
            }
        }
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



    case "PUT":

        $datas = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE `plat`
                SET `libellee` = :libellee, `prix` = :prix, 
                    `fournisseur` = (SELECT id from fournisseur WHERE nomFrn = :fournisseur),
                    `categorie` = (SELECT id from categories WHERE nomCat = :categorie)
                WHERE `id` = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $datas->id);
        $stmt->bindParam(':libellee', $datas->libellee);
        $stmt->bindParam(':prix', $datas->prix);
        $stmt->bindParam(':fournisseur', $datas->fournisseur);
        $stmt->bindParam(':categorie', $datas->categorie);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

}
?>