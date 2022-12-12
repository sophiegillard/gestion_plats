<?php
    /**
    * Database Connection
    */
    class DbConnection {
        public function connect(){
        $host = 'localhost';
        $dbname = 'apschool';
        $username = 'sophro';
        $password = '123';

        try {
            $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
            die();
        }
        return $db;
    }

    }
    
?>