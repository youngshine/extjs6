<?php
$conn = mysqli_connect('localhost', 'root', '', 'books');
mysqli_set_charset($conn,"SET NAMES UTF8");
if (!$conn) {
    echo '数据库连接失败！';
}
?>