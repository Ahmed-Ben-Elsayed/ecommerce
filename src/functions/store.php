<?php 
define("host",'localhost');
define("user",'root');
define("pass",'');
define("dbname",'conect');
$connect = mysqli_connect(host,user,pass,dbname);
$name = $_POST['name'];
$email = $_POST['email'];
$sub = $_POST['subject'];
$message = $_POST['message'];
$insert = "INSERT INTO `info`(`name`, `email`, `subject`, `message`) VALUES ('$name','$email','$sub','$message')";
mysqli_query($connect,$insert);
?>