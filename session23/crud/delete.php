<?php

$id = $_GET['id'];

$connection = mysqli_connect("localhost","root","","baltim");
$sql = "DELETE FROM `category` where `id` = $id";
$query = mysqli_query($connection,$sql);

header("location: show.php");
