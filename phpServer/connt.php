<?php
header("Content-type:text/html;charset=utf-8");

$dbms='mysql';     //数据库类型 oracle 用ODI,对于开发者来说，使用不同的数据库，只要改这个，不用记住那么多的函数了
$host='115.28.50.171'; //数据库主机名
$dbName='apidoc';    //使用的数据库
$user='apidocAdmin';      //数据库连接用户名
$pass='a123456789';          //对应的密码

$dsn="$dbms:host=$host;dbname=$dbName";


$conn = new mysqli($host,$user,$pass,$dbName);
if (!$conn)
  {
  die('Could not connect: ' . mysql_error());
  }
  else{
      //echo "链接成功<br>";
  }
  ?>