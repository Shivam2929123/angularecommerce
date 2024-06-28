<?php
$first_name=$_POST['first_name'];

$last_name=$_POST['last_name'];
$dob=$_POST['dob'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$username=$_POST['username'];
$password=$_POST['password'];
$gender=$_POST['gender'];
$conn=new mysqli('localhost','root','');
if($conn->connect_error){
    die('Connection Failed:' .$conn->connect_error);

}
else{
    $stmt=$conn->prepare("insert into register(first_name,last_name,dob,phone,email,username,password,gender)values(?,?,?,?,?,?,?)");
    $stmt->bind_param("ssdisssb",$first_name,$last_name,$dob,$phone,$email,$username,$password,$gender);
    $stmt->execute();
    echo "REGISTRATION SUCCESSFULLY...";
    echo"Our Team Will Reach You Shortly";
    $stmt->close();
    $conn->close();

}

?>