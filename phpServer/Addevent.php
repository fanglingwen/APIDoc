<?php
header('Content-type:text/html;charset=utf-8');

include('connt.php');
$conn->query("SET NAMES UTF8");

$Event=$_GET["Event"];
$EventPoint=$_GET["EventPoint"];
$Author=$_GET["Author"];
$Remark=$_GET["Remark"];
$Event_Value=$_GET["EventValue"];

if($Author=='潘士钊')
 {
    $Author='sz_p';
 }
else if($Author=='辜江华')
{
    $Author='jh_g';
}
else{
     $data['states'] = "2";
}

if($Remark==""){
    $sqlAddevnet =  "INSERT INTO developLog(Event,EventPoint,EventValue,Author,CreateTime) 
    VALUES('$Event','$EventPoint','$Event_Value','$Author',NOW())";
}
if ($Remark!="") {
    $sqlAddevnet =  "INSERT INTO developLog(Event,EventPoint,EventValue,Author,CreateTime,Remark) 
    VALUES('$Event','$EventPoint','$Event_Value','$Author',NOW(),'$Remark')";
}

$isSucceed = $conn->query($sqlAddevnet);

$data = array();

if($isSucceed){
    $data['states'] = "1";
}
else{
    $data['states'] = "0";
}


$jos = json_encode($data);
echo $jos;
?>