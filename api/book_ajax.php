<?php
include './conn.php';
header("content-type:text/html;charset=utf-8;");
if (isset($_GET['start']) && isset($_GET['limit']) && isset($_GET['page'])) {
    $start = $_GET['start'];
    $limit = $_GET['limit'];
    $page = $_GET['page'];
}
$sql = "select count(*) as num from books";
$sqli = "select * from books";
$countres = mysqli_query($conn, $sql);
$countattr = mysqli_fetch_assoc($countres);
$count = $countattr['num'];
/*if (!isset($_GET['bookname'])) {
    $sqli = "select * from books limit ".(($page-1)*$limit).",$limit";
} else {
    $book_name = $_GET['bookname'];
    $sqli = "select * from books where bookname like '%{$book_name}%'";
}*/
$rest = mysqli_query($conn, $sqli);
$attr['total'] = $count;
$rds = array();
while ($restattr = mysqli_fetch_array($rest)) {
	$rds[] = $restattr;
}
$attr['rows'] = $rds;
$jsonstr = json_encode($attr);
echo $jsonstr;

