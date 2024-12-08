<?php
$file = 'data.json';
$products = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
echo json_encode($products);
