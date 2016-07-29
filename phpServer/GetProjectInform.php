<?php
header('Content-type:text/html;charset=utf-8');
include('connt.php');

$sqlGetProject = "SELECT * from project";

$ProjectResult = $conn->query($sqlGetProject);

$userRow = $ProjectResult -> fetch_assoc();

$data = array();
if($userRow){
    $data['projectName'] = $userRow['projectname'];
    $data['URL'] = $userRow['URL'];
}
else{
    $data['state'] = '0';
}
$jos = json_encode($data);
echo $jos;
?>