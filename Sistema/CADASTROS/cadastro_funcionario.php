<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Funcionário</title>
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
            <li><a class="dropdown-item sob disabled" href="../CADASTROS/Cadastro_Funcionario.php">Funcionário</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../CADASTROS/Cadastro_Produto.php">Produto</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item sob" href="../CADASTROS/Cadastro_Usuario.php">Usuário</a></li>
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
<form class="row g-3" id="formulario-cadastro" method="POST" action="#" enctype="multipart/form-data">
<div id="voltar">
  <a href="../menu.php">
    <button class="btn btn-primary btn-warning" type="button" id="voltar">Voltar</button>
  </a>
</div>
<div id="formulario-cadastro">
<div class="form-section">
<h3>Informações Pessoais</h3>
  <div>
    <label for="validationDefault01" class="form-label">Nome</label>
<input type="text" class="form-control" id="inNome" name="inNome" required>
  </div>

  <div>
    <label for="validationDefaultUsername" class="form-label">CPF</label>
    <div class="input-group">
      <input type="text" class="form-control" id="inCPF" name="inCPF" onfocusout="TestaCPF(this.value);" maxlength="11" required>
    </div>
  </div>

  <div>
    <label for="validationDefault03" class="form-label">Data de Nascimento</label>
    <input type="text" class="form-control" id="inNascimento" name="inNascimento" onfocusout="formatarNascimento()" placeholder="EX. 20011978" maxlength="8" required>
  </div>

  <div style="margin: 10px;">
  <label class="form-label">SEXO</label>
  <select name="inSexo"> 
<option value="masculino">Masculino</option> 
<option value="feminino">Feminino</option>
</select>
  </div>
</div>

<div class="form-section">
      <h3>Informações Tecnicas</h3>
<div>
    <label for="validationDefault05" class="form-label">DEPARTAMENTO</label>
    <input type="text" class="form-control" id="inDepartamento" name="inDepartamento" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">CARGO</label>
    <input type="text" class="form-control" id="inCargo" name="inCargo" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">Salário</label>
    <input type="text
    " class="form-control" id="inSalario" name="inSalario" placeholder="EX. 5027,50" onfocusout="formatarSalario()" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">STATUS</label>
    <input type="text" class="form-control" id="inStatus" name="inStatus" placeholder="ativo/inativo" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">Estado Civil</label>
    <select class="form-control" id="inEstado" name="inEstado" required>
  <option value="Solteiro(a)">Solteiro(a)</option>
  <option value="Casado(a)">Casado(a)</option>
  <option value="Divorciado(a)">Divorciado(a)</option>
  <option value="Viúvo(a)">Viúvo(a)</option>
</select>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">Data de Admissão</label>
    <input type="text" class="form-control" id="inDataAdmissao" name="inDataAdmissao" onfocusout="formatarData()" placeholder="EX. 20082005" maxlength="8" required>
  </div>
</div>

<div class="form-section">
      <h3>Contato</h3>
  <div>
    <label for="validationDefault05" class="form-label">Celular</label>
    <input type="text" class="form-control" id="inTel" name="inTel" maxlength="11" onfocusout="formatarTel()" required>
  </div>

  <div>
    <label for="validationDefault05" class="form-label">E-MAIL</label>
    <input type="email" class="form-control" id="inMail" name="inMail" required>
  </div>
</div>

<div class="form-section">
      <h3>Outros</h3>
  <div>
    <label for="validationDefault05" class="form-label">Imagem</label>
  <input type="file" id="inImagem" name="inImagem"  class="form-control-file" accept="image/*" required>
  </div>

  <div>
    <button class="btn btn-primary btn-success" type="submit" id="btCadastrar">Cadastrar</button>
  </div>
  <div>   <button class="btn btn-primary btn-danger" type="button" id="btLimparCampos">Limpar Campos</button>
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
      <script src="../JS/cadastro_funcionario.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="../JS/valCpf.js"></script>
</body>

<?php
error_reporting(0);
if(!empty($_POST))
{
  
  date_default_timezone_set('America/Sao_Paulo');

    $validExt = array("xbm", "tif", "jfif", "ico", "tiff", "gif", "svg", "jpeg", "svgz", "jpg", "webp", "png", "bmp", "pjp", "apng", "pjpeg", "avif");
    $aux = explode(".", $_FILES['inImagem']['name']);
    $extImg = strtolower(end($aux));

    if ($extImg != "") {
        if (in_array($extImg, $validExt)) {
            if (filesize($_FILES['inImagem']['tmp_name']) <= 50000000) {  // Note: Changed 'name' to 'tmp_name' for filesize check
                $novoNome = date("d.m.Y-H.i.s") . "." . $extImg;
                move_uploaded_file($_FILES['inImagem']['tmp_name'], "./arquivos/Produto/" . $novoNome);
            } else {
                echo "<script>
                alert('O tamanho limite do arquivo é de 50MB'); 
                </script>";
                exit;
            }
        } else {
            echo "<script> 
            alert('O arquivo não é uma imagem!'); 
            </script>";
            exit;
        }
    } else {
        echo "<script> 
        alert('Nenhum arquivo de imagem foi selecionado'); 
        </script>";
        exit;
    }
    
  $dados = array("Nome: ", "CPF: ", "Data de Nascimento: ", "Sexo: ", "Departamento: ", "Cargo: ", "Salario: ", "Status: ", "Estado Civil: ", "Data de Admissão: ", "Telefone: ", "E-mail: ", "Imagem: ");
  $cliente = array($_POST['inNome'], $_POST['inCPF'], $_POST['inNascimento'], $_POST['inSexo'], $_POST['inDepartamento'], $_POST['inCargo'], $_POST['inSalario'], $_POST['inStatus'], $_POST['inEstado'], $_POST['inDataAdmissao'], $_POST['inTel'], $_POST['inMail'], $_POST['inImagem'], $_POST['inImagem'] );

  $conteudo = "Funcionario: ";
  
  for($i = 0; $i < count($cliente); $i++)
  {
    $conteudo .= $dados[$i].$cliente[$i].";
    ";
  }

  $conteudo .= "

";

  $caminho = "config/funcionario.txt"; //caminho onde sera criado o arquivo
  
        if(file_put_contents($caminho,$conteudo,FILE_APPEND))
        {
          echo"<script> alert('Dados cadastrado com sucesso');</script>";
        }
        else
        {
          echo"<script> alert('Erro ao cadastrar!');</script>";
        }

  $nome = $_POST['inNome'];
	$cpf = $_POST['inCPF'];
	$data_nascimento = $_POST['inNascimento']; //VARIÁVEIS QUE RECEBEM OS VALORES VINDOS DO FORMULÁRIO
	$sexo = $_POST['inSexo'];
	$departamento = $_POST['inDepartamento'];
	$cargo = $_POST['inCargo'];
  $salario = $_POST['inSalario'];
  $status = $_POST['inStatus'];
  $estado_civil = $_POST['inEstado'];
  $data_admissao = $_POST['inDataAdmissao'];
  $telefone = $_POST['inTel'];
  $email = $_POST['inMail'];

	include_once('conexao.php');   //   ARQUIVO UTILIZADO COMO BIBLIOTECA PARA CONECTAR AO BANCO DE DADOS

	try {
	  
	  $stmt = $conn->prepare("INSERT INTO funcionario (nome , cpf , data_nascimento, sexo , departamento , cargo , salario , status , estado_civil , data_admissao , telefone, email)  
	  	                                   VALUES (:nome, :cpf, :data_nascimento, :sexo, :departamento, :cargo, :salario, :status, :estado_civil, :data_admissao, :telefone, :email)"); //INSTRUÇÃO SQL

	  $stmt->bindParam(':nome', $nome);
	  $stmt->bindParam(':cpf', $cpf);
	  $stmt->bindParam(':data_nascimento', $data_nascimento);          // REFERENCIAS PARA ENVIAR O CONTEÚDO DAS VARIÁVEIS PARA O INSERT
	  $stmt->bindParam(':sexo', $sexo);
	  $stmt->bindParam(':departamento', $departamento);
    $stmt->bindParam(':cargo', $cargo);
    $stmt->bindParam(':salario', $salario);
    $stmt->bindParam(':status', $status);
    $stmt->bindParam(':estado_civil', $estado_civil);
	  $stmt->bindParam(':data_admissao', $data_admissao);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':email', $email);
	  
	  $stmt->execute();                    // EXECUÇÃO DA INSTRUÇÃO PELO OBJETO


	} catch(PDOException $e) {
	  echo "Erro ao cadastrar: " . $e->getMessage();
	}
	$conn = null; // FECHAMENTO DA CONEXÃO
         
  }
?>
</html>