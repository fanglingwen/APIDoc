<?php
header('Content-type:text/html;charset=utf-8');
include('connt.php');

$title=$_GET["Title"];

$sqlGetitem = "SELECT * from item where Title = '$title'";

$itemResult = $conn->query($sqlGetitem);

$itemRow = $itemResult -> fetch_assoc();

$data = array();

if($itemRow){
    $data['Title'] = $itemRow['Title'];
    $data['URL'] = $itemRow['URL'];
    $data['RequestType'] = $itemRow['RequestType'];
    $data['remark'] = $itemRow['remark'];
    $data['description'] = $itemRow['description'];
}
else{
    $data['state'] = '0';
}
$jos = json_encode($data);
echo $jos;
?>