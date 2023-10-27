<?php

if(isset($_POST['category'])){
    // post
    $name = $_POST['category'];
    $imgname = $_FILES['img']['name'];
    $tmp = $_FILES['img']['tmp_name'];
    $connection = mysqli_connect("localhost","root","","baltim");
    $sql = "INSERT INTO `category` (`name`,`img`) VALUES ('$name','$imgname')";
    mysqli_query($connection,$sql);
    move_uploaded_file($tmp,"img/".$imgname);

    header("location: show.php");
}





?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="add.php" method="post" enctype="multipart/form-data">
        <input type="text" name="category">
        <input type="file" name="img">
        <input type="submit" value="send">
    </form>
</body>
</html>
