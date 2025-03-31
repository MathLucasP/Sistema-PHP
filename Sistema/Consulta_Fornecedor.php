<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta Fornecedor</title>
    <link rel="icon" href="IMG/LogoB.png" type="image/x-icon"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./CSS/consulta.css">
</head>
<body>
<div class="bg-dark text-light" style="display: flex; flex-direction: column; text-align: center; padding: 5px;">
    <h2>Consulta Fornecedor</h2>
    <a href="menu.php"><button type="button" class="btn btn-primary">Voltar</button></a>
</div>
</body>
</html>
<?php
echo "<div class='container-fluid d-flex flex-row' id='main-conteudo'>";
$conteudo = nl2br(file_get_contents("./CADASTROS/config/fornecedor.txt"));
echo "<div id='conteudo'>". $conteudo. "</div>";
echo "</div>";
?>