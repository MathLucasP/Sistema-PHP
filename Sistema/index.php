<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" href="IMG/LogoB.png" type="image/x-icon"/>
    <link rel="stylesheet" href="./CSS/index.css">
</head>
<body>
    <form method="POST" action="#">
     <p>Login <input type="text" id="inLogin" name="login"><p>
     <p>Senha <input type="password" id="inSenha" name="senha"><p>
    <input type="submit" value="Logar" id="btLogar">
    </form>
</body>
</html>
<?php
error_reporting(0);
/* administrador = ABC
   SuperAdmin = senha123*/
if(!empty($_POST))
{
    session_start();
 
    $login = $_POST['login'];
    $senha = $_POST['senha'];
 
    if ($login == "" or $senha == ""){
        echo "<script> alert('Há algum campo vazio!'); </script>";
        exit();
    }
    include_once("/CADASTROS/conexao.php");

try {
    $stmt = $conn->prepare("SELECT senha, nome FROM usuario WHERE nome = ?");
    $stmt->execute([$login]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$result) {
        echo "<script> alert('Login não encontrado!'); </script>";
    } else if ($senha !== $result['senha']) {
        echo "<script> alert('Senha Incorreta para $login'); </script>";
    } else {
        $_SESSION['login'] = $login;
        if ($login === "SuperAdmin" || $login === "administrador") {
            header('location: menu.php');
        } else {
            header('location: menu.php');
        }
        exit();
    }
    } catch(PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
    $conn = null;
}

?>