<?php
    /**
    * Database Connection
    */
    class DbConnection {
        public function connect(){
        $host = 'localhost';
        $dbname = 'schoolDish';
        $username = 'sophro';
        $password = '123';
        $port = '8888';


        try {
            $db = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $username, $password);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
            die();
        }
        return $db;
    }

    }
    
?>