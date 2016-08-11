<?php
header('Content-type:text/html;charset=utf-8');
include('connt.php');

$title=$_GET["Title"];

$sqlGetitem = "SELECT * from ReturnsParameter where title = '$title'";

$itemResult = $conn->query($sqlGetitem);

$itemRow = $itemResult -> fetch_assoc();

$data = array();

$i=0;

while($itemRow){
    $data[$i]['name'] = $itemRow['name'];
    $data[$i]['type'] = $itemRow['type'];
    $data[$i]['remark'] = $itemRow['remark'];
    $data[$i]['instructions'] = $itemRow['instructions'];
    $itemRow = $itemResult -> fetch_assoc();
    $i++;
}
$jos = json_encode($data);
echo $jos;
?>