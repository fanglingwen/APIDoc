<?php
header('Content-type:text/html;charset=utf-8');
include('connt.php');

$sqlGetProject = "SELECT * from developLog";

$ProjectResult = $conn->query($sqlGetProject);

$userRow = $ProjectResult -> fetch_assoc();

$data = array();
//print_r($userRow);
$i = 0;
while($userRow){
    $data[$i]['ID'] = $userRow['ID'];
    $data[$i]['Event'] = $userRow['Event'];
    $data[$i]['EventPoint'] = $userRow['EventPoint'];
    $data[$i]['EventValue'] = $userRow['EventValue'];
    $data[$i]['Author'] = $userRow['Author'];
    $data[$i]['CreateTime'] = $userRow['CreateTime'];
    $data[$i]['Remark'] = $userRow['Remark'];
    $userRow = $ProjectResult -> fetch_assoc();
    $i++;
}
<<<<<<< HEAD
//print_r($data);
=======
// print_r($data);
>>>>>>> origin/master
$jos = json_encode($data);
echo $jos;
?>