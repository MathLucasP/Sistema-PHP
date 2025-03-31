<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Usuário</title>
    <link rel="icon" href="IMG/LogoB.png" type="image/x-icon"/>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../CSS/Cadastro.css">
    <link rel="stylesheet" href="../CSS/Menu.css">
</head>
<body>
<nav class="bg-dark navbar navbar-expand-lg mx-auto p-2">
        <div class="container-fluid">
        <a href="#" class="navbar-brand"><img src="../IMG/LogoB.png" width="100px" alt="FUTETEC"></a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-auto p-2" id="Dropdown">
          <a class="nav-link active text-light" aria-current="page" href="../menu.php" id="Inicio">Início</a>
        </li>
        <li class="nav-item dropdown mx-auto p-2" id="Dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cadastros
          </a>
          <ul class="dropdown-menu" id="item-drop">
            <li><a class="dropdown-item sob" href="../CADASTROS/Cadastro_Cliente.php">Cliente</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../CADASTROS/Cadastro_Fornecedor.php">Fornecedor</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../CADASTROS/Cadastro_Funcionario.php">Funcionário</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../CADASTROS/Cadastro_Produto.php">Produto</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob disabled" href="../CADASTROS/Cadastro_Usuario.php">Usuário</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-auto p-2" id="Dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultas
          </a>
          <ul class="dropdown-menu" id="item-drop">
            <li><a class="dropdown-item sob" href="../Consulta_Cliente.php">Cliente</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../Consulta_Fornecedor.php">Fornecedor</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../Consulta_Funcionario.php">Funcionário</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../Consulta_Produto.php">Produto</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../Consulta_Usuario.php">Usuário</a></li>
          </ul>
        </li>
        <li class="nav-item mx-auto p-2" id="Dropdown">
          <a class="nav-link text-light" aria-disabled="false" href="../index.php">Sair</a>
        </li>
        
        <li class="nav-item mx-auto p-2" id="Session">
        <?php
        session_start();
if($_SESSION['login'] == 'administrador' || $_SESSION['login'] == 'SuperAdmin') {
  if($_SESSION['login'] == "administrador") {
    echo ("<h1 id='admin'>Admin</h1>");
  }

  if(md5($_SESSION['login']) == "SuperAdmin") {
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
<form class="row g-3" id="formulario-cadastro" method="POST" action="#">
  
<div id="voltar">
  <a href="../menu.php">
    <button class="btn btn-primary btn-warning" type="button" id="voltar">Voltar</button>
  </a>
</div>
<div id="formulario-cadastro">
<div class="form-section">
<h3>Cadastro de Usuario</h3>
  <div>
    <label for="validationDefault01" class="form-label">Nome</label>
<input type="text" class="form-control" id="inNome" name="inNome" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">E-MAIL</label>
    <input type="email" class="form-control" id="inMail" name="inMail" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">Senha</label>
    <input type="password" class="form-control" id="inSenha" name="inSenha" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">Confirmar Senha</label>
    <input type="password" class="form-control" id="inConfSenha" required>
  </div>
</div>
<div id="buttons">
  <div>
    <button class="btn btn-primary btn-success" type="submit" id="btCadastrar">Cadastrar</button>
  </div>
  <div>   <button class="btn btn-primary btn-danger" type="button" id="btLimparCampos">Limpar Campos</button>
</div>
</div>
</div>
</form>
<div class="modal fade" id="modalAlert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div id="modal_titulo_div">
            <h5 class="modal-title" id="modal_titulo"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body" id="modal_conteudo"></div>
          <div class="modal-body" id="modal_erro"></div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal" id="modal_btn">Voltar</button>
          </div>
        </div>
      </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="../JS/cadastro_usuario.js"></script>
</body>
</html>
<?php
error_reporting(0);
if(!empty($_POST))
{
  $nome = $_POST['inNome'];
        $email = $_POST['inMail'];
        $senha = $_POST['inSenha'];
      
        include_once('conexao.php');   //   ARQUIVO UTILIZADO COMO BIBLIOTECA PARA CONECTAR AO BANCO DE DADOS
      
        try {
          
          if ($conn) {
            $stmt = $conn->prepare("INSERT INTO usuario (nome , email , senha)  
                                                 VALUES (:nome, :email, :senha)"); //INSTRUÇÃO SQL
        
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':senha', $senha);
            
            $stmt->execute();                    // EXECUÇÃO DA INSTRUÇÃO PELO OBJETO
          } 
        } catch(PDOException $e) {
          echo "Erro ao cadastrar: " . $e->getMessage();
        }
        $conn = null; // FECHAMENTO DA CONEXÃO

  $senha = $_POST['inSenha'];
  $senhaCripto = md5($senha);
  $dados = array("Nome: ", "E-mail: ", "Senha: ");
  $usuario = array(md5($_POST['inNome']), $_POST['inMail'], $senhaCripto);

  $conteudo = "Usuario: ";
  
  for($i = 0; $i < count($usuario); $i++)
  { 
      if($i == count($usuario) - 1) {
        $conteudo .= $usuario[$i].";";      
      } else{
    $conteudo .= $usuario[$i].", ";
        }
  }
  $conteudo .= "

";
  $caminho = "config/usuario.txt"; //caminho onde sera criado o arquivo
  
        if(file_put_contents($caminho,$conteudo,FILE_APPEND))
        {
          echo"<script> alert('Dados cadastrado com sucesso');</script>";
        }
        else
        {
          echo"<script> alert('Erro ao cadastrar!');</script>";
        }          
  }
?>