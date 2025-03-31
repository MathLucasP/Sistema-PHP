<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="IMG/LogoB.png" type="image/x-icon"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./CSS/consulta.css">
    <title>Recebe Arquivo</title>
</head>
<body>
<div class="bg-dark text-light" style="display: flex; flex-direction: row; text-align: center; padding: 5px;">
    <a href="menu.php"><button type="button" class="btn btn-primary">Voltar</button></a>
</body>
</html>

<?php
// Definindo a timezone
  date_default_timezone_set("America/Sao_Paulo");

  // Pegando extensão do arquivo
  $ext = strtolower(substr($_FILES["inImagem"]["name"], -4));

  // Definindo um novo nome para o arquivo
  $novo_nome = date("Y.m.d-H.i.s").$ext;

  //Diretório para uploads 
  $dir = "CADASTROS/arquivos/";

  //Fazer upload do arquivo
  move_uploaded_file($_FILES["inImagem"]["tmp_name"], $dir.$novo_nome);

  echo("<div style='margin-left: 50px;'> Arquivos enviado com sucesso! </div>");
  
      ?>