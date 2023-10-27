<?php

$connection = mysqli_connect("localhost","root","","baltim");
$sql = "SELECT * FROM `category`";
$query =  mysqli_query($connection,$sql);
$data =  mysqli_fetch_all($query,MYSQLI_ASSOC);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>img</th>
            <th>delete</th>
        </tr>

        <!-- 
$connection = mysqli_connect("localhost","root","","baltim");
$sql = "SELECT * FROM `category`";
$query =  mysqli_query($connection,$sql);
$data =  mysqli_fetch_all($query,MYSQLI_ASSOC);
         -->
   <?php foreach($data as $x): ?>
        <tr>
            <td> <?= $x['id'] ?> </td>
            <td> <?= $x['name'] ?> </td>
            <td> <img width="100px" height="100px" src="img/<?= $x['img'] ?>" alt=""> </td>
            <td><a href="delete.php?id=<?= $x['id'] ?>">delete</a></td>
        </tr>
   <?php endforeach; ?>

 
    </table>
</body>
</html>