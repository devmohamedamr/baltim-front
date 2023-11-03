<?php

if(isset($_POST['category'])){
    $category = $_POST['category'];
    $imgname = $_FILES['img']['name'];
    $tmp = $_FILES['img']['tmp_name'];
    $id = $_GET['id'];
    move_uploaded_file($tmp,"img/".$imgname);
    $connection =  mysqli_connect("localhost","root","","baltim");
    mysqli_query($connection,"UPDATE `category` SET `name` = '$category' , `img` = '$imgname' WHERE `id` = $id ");
    header("location: show.php");
}else {
    $id = $_GET['id'];
$connection =  mysqli_connect("localhost","root","","baltim");

$query = mysqli_query($connection,"SELECT * FROM  `category` WHERE `id` = $id");

$data=  mysqli_fetch_assoc($query);
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
    <form action="update.php?id=<?= $data['id'] ?>" method="post" enctype="multipart/form-data">
        <input type="text" value="<?= $data['name'] ?>" name="category">
        <img width="100px" height="100px" src="img/<?= $data['img'] ?>" alt="">
        <input type="file" name="img">
        <input type="submit" value="send">
    </form>
</body>
</html>
