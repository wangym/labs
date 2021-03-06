<?php

// NoSqlAdapter.php

(!defined('_APP') ? exit('Access Denied!') : '');

/**
 *
 */
interface INoSqlAdapter {

    /**
     * 与数据库建立个短连接
     *
     * @param array $database
     */
    public function connect($database);

    /**
     * 移除当前库内所有实体
     *
     * @return boolean $result
     */
    public function flushDB();

    /**
     * @param string $key
     * @return string $value
     */
    public function get($key);

    /**
     * @param string $pattern
     * @return array $array
     */
    public function keys($pattern);

    /**
     * @param string $key
     * @param string $value
     * @param int $ttl (optional)
     * @return boolean $result
     */
    public function set($key, $value, $ttl);
}

/**
 *
 */
(!class_exists('Redis') ? exit('Fatal error: Class Redis not found!') : '');

class RedisNoSqlAdapter extends Redis implements INoSqlAdapter {

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

        try {
            $result = parent::connect($database[_ENV]['host'], $database[_ENV]['port']);
            if (false === $result) {
                exit($this->getLastError());
            }
            $result = $this->auth($database[_ENV]['username'] . '-' . $database[_ENV]['password'] . '-' . $database[_ENV]['dbname']);
            if (false === $result) {
                exit($this->getLastError());
            }
        } catch (RedisException $e) {
            exit($e->getMessage());
        }
    }

    public function flushDB() {

        $result = parent::flushDB();

        return $result;
    }

    public function get($key) {

        $value = '';

        if (!empty($key)) {
            $value = parent::get($key);
        }

        return $value;
    }

    public function keys($pattern) {

        $array = array();

        if (!empty($pattern)) {
            $array = parent::keys($pattern);
        }

        return $array;
    }

    public function set($key, $value, $ttl = 0) {

        $result = false;

        if (!empty($key) && !empty($value) && is_int($ttl)) {
            if (0 <= $ttl) {
                $result = parent::setex($key, $ttl, $value);
            } else {
                $result = parent::set($key, $value);
            }
        }

        return $result;
    }
}

