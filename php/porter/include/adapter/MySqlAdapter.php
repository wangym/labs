<?php

// MySqlAdapter.php

(!defined('_APP') ? exit('Access Denied!') : '');

/**
 *
 */
interface IMySqlAdapter {

    /**
     * 建立连接
     *
     * @param array $database
     */
    public function connect($database);

    /**
     * 获取全部
     *
     * @param object $result
     * @return array $array
     */
    public function fetchAll($result);
}

/**
 *
 */
(!class_exists('mysqli') ? exit('Fatal error: Class mysqli not found!') : '');

class MySqliAdapter extends mysqli implements IMySqlAdapter {

    /**
     *
     */
    public function __construct() {

        global $_database;
        $this->connect($_database);
        unset($_database);
    }

    /**
     *
     */
    public function __destruct() {
        $this->close();
    }

    public function connect($database) {

        parent::__construct(
            $database[_ENV]['host'],
            $database[_ENV]['username'],
            $database[_ENV]['password'],
            $database[_ENV]['database']
        );
        (mysqli_connect_errno() ? exit(mysqli_connect_error()) : '');
        $this->query('set names ' . $database[_ENV]['charset']);
    }

    public function fetchAll($result) {

        $array = array();

        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $array[$i] = $row;
            $i++;
        }

        return $array;
    }
}

