<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productName = $_POST['productName'];
    $quantity = (int)$_POST['quantity'];
    $price = (float)$_POST['price'];
    $datetime = date('Y-m-d H:i:s');

    $file = 'data.json';
    $products = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    $products[] = [
        'productName' => $productName,
        'quantity' => $quantity,
        'price' => $price,
        'datetime' => $datetime
    ];

    file_put_contents($file, json_encode($products));
    echo 'Success';
}
