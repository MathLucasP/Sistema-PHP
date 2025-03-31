
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <link rel="icon" href="IMG/LogoB.png" type="image/x-icon"/>
    <link href="./CSS/Menu.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="./JS/menu.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <nav class="bg-dark navbar navbar-expand-lg mx-auto p-2">
        <div class="container-fluid">
        <a href="#" class="navbar-brand"><img src="./IMG/LogoB.png" width="100px" alt="FUTETEC"></a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-auto p-2" id="Dropdown">
          <a class="nav-link active text-light" aria-current="page" href="#" id="Inicio">Início</a>
        </li>
        <li class="nav-item dropdown mx-auto p-2" id="Dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cadastros
          </a>
          <ul class="dropdown-menu" id="item-drop">
            <li><a class="dropdown-item sob" href="./CADASTROS/Cadastro_Cliente.php">Cliente</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="./CADASTROS/Cadastro_Fornecedor.php">Fornecedor</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="./CADASTROS/Cadastro_Funcionario.php">Funcionário</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="./CADASTROS/Cadastro_Produto.php">Produto</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="./CADASTROS/Cadastro_Usuario.php">Usuário</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-auto p-2" id="Dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultas
          </a>
          <ul class="dropdown-menu" id="item-drop">
            <li><a class="dropdown-item sob" href="Consulta_Cliente.php">Cliente</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="Consulta_Fornecedor.php">Fornecedor</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="Consulta_Funcionario.php">Funcionário</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="Consulta_Produto.php">Produto</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="Consulta_Usuario.php">Usuário</a></li>
          </ul>
        </li>
        <li class="nav-item mx-auto p-2" id="Dropdown">
          <a class="nav-link text-light" aria-disabled="false" href="index.php">Sair</a>
        </li>

        <li class="nav-item mx-auto p-2" id="Session">
        <?php
        session_start();
if($_SESSION['login'] == 'administrador' || $_SESSION['login'] == 'SuperAdmin') {
  if($_SESSION['login'] == "administrador") {
    echo ("<h1 id='admin'>Admin</h1>");
  }

  if($_SESSION['login'] == "SuperAdmin") {
    echo ("<h1 id='Sadmin'>SuperAdmin</h1>");
  }
} else {       
echo ("<h1 class='text-light'>Usuario</h1>");
}
?>
        </li>

        </ul>
        </div>
    </nav>
    <div class="tubarao">
  <img src="IMG/tubarao.png">
  <img src="IMG/tubarao.png">
  <img src="IMG/tubarao.png">
  <img src="IMG/tubarao.png">
  <img src="IMG/tubarao.png">
  <img src="IMG/tubarao.png">
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html>