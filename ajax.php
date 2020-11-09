<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$to = "rahul.thakur@himanshusofttech.com";
$subject = "My subject";
$txt = "Hello admin! query is send by the user and user details are : name : ".$name." phone : ".$phone." email : ".$email." subject : ".$subject." message : ".$message."";
$headers = "From: webmaster@example.com";

echo mail($to,$subject,$txt,$headers);


?>