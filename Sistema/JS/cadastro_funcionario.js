var aceito = true;
var modal = "";
function valNome() {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    if(nome == "") {
        aceito = false;
        modal += "Nome Invalido\n";
        inNome.focus();
        return;
    }
}

function valNascimento() {
    var inNascimento = document.getElementById("inNascimento");
    var Nascimento = inNascimento.value;

    if(Nascimento.length != 10) {
        aceito = false;
        modal += "Data de Naascimento Invalido\n";
    }

    
    var partesData = Nascimento.split('/');
    var data = { 
      dia: partesData[0], 
      mes: partesData[1], 
      ano: partesData[2] 
    }

    // Converte strings em número
  var dia = parseInt(data.dia);
  var mes = parseInt(data.mes);
  var ano = parseInt(data.ano);
  
 
// Dias de cada mês, incluindo ajuste para ano bissexto
var diasNoMes = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

// Atualiza os dias do mês de fevereiro para ano bisexto
if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0) {
  diasNoMes[2] = 29
}

// Regras de validação:
// Mês deve estar entre 1 e 12, e o dia deve ser maior que zero
if (mes < 1 || mes > 12 || dia < 1 || ano > 2024 || ano <= 1930) {
    aceito = false;
    modal += "Data de Nascimento Invalida\n";
    inNascimento.focus();
    return;
}
// Valida número de dias do mês
else if (dia > diasNoMes[mes]) {
    aceito = false;
    modal += "Data de Nascimento Invalida\n";
    inNascimento.focus();
    return;
}
}

function formatarNascimento() {
    var inNascimento = document.getElementById("inNascimento");
    var Nascimento = inNascimento.value.replace(/\D/g, '');
    if(Nascimento != "" && Nascimento.length == 8) {
    var NascimentoFormatado = "";

    var dia = Nascimento.slice(0,2);
    var mes = Nascimento.slice(2,4);
    var ano = Nascimento.slice(4,8);

    NascimentoFormatado = dia + "/" + mes + "/" + ano;

    inNascimento.value = NascimentoFormatado;
} 
}

function valData() {
    var inDataAdmissao = document.getElementById("inDataAdmissao");
    var Admissao = inDataAdmissao.value;

    if(Admissao.length != 10) {
        aceito = false;
        modal += "Data de Admissão Invalido\n";
        return;
    }

    
    var partesData = Admissao.split('/');
    var data = { 
      dia: partesData[0], 
      mes: partesData[1], 
      ano: partesData[2] 
    }

    // Converte strings em número
  var dia = parseInt(data.dia);
  var mes = parseInt(data.mes);
  var ano = parseInt(data.ano);
  
 
// Dias de cada mês, incluindo ajuste para ano bissexto
var diasNoMes = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

// Atualiza os dias do mês de fevereiro para ano bisexto
if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0) {
  diasNoMes[2] = 29
}

// Regras de validação:
// Mês deve estar entre 1 e 12, e o dia deve ser maior que zero
if (mes < 1 || mes > 12 || dia < 1 || ano > 2024 || ano <= 1930) {
    aceito = false;
    inDataAdmissao.focus();
    return;
}
// Valida número de dias do mês
else if (dia > diasNoMes[mes]) {
    aceito = false;
    inDataAdmissao.focus();
    return;
}
}

function formatarData() {
    var inDataAdmissao = document.getElementById("inDataAdmissao");
    var Admissao = inDataAdmissao.value.replace(/\D/g, '');
    if(Admissao != "" && Admissao.length == 8) {
    var AdmissaoFormatado = "";

    var dia = Admissao.slice(0,2);
    var mes = Admissao.slice(2,4);
    var ano = Admissao.slice(4,8);

    AdmissaoFormatado = dia + "/" + mes + "/" + ano;

    inDataAdmissao.value = AdmissaoFormatado;
}
}

function valDepartamento() {
    var inDepartamento = document.getElementById("inDepartamento");
    var departamento = inDepartamento.value;

    if(departamento == "") {
        aceito = false;
        modal += "Departamento Invalido\n";
        return;
    }
}

function valCargo() {
    var inCargo = document.getElementById("inCargo");
    var Cargo = inCargo.value;

    if(Cargo == "") {
        aceito = false;
        modal += "Cargo Invalido\n";
        inCargo.focus();
        return;
    }
}

function valSalario() {
    var inSalario = document.getElementById("inSalario");
    var Salario = inSalario.value;

    if(Salario == "") {
        aceito = false;
        modal += "Salario Invalido\n";
        inSalario.focus();
        return;
    }
}

function formatarSalario() {
    var inSalario = document.getElementById("inSalario");   
	var Salario = inSalario.value.replace(/[^\d]+/g,',');
    if(Salario != "" ) {
    inSalario.value = "R$" + Salario;
    }
}

function valStatus() {
    var inStatus = document.getElementById("inStatus");
    var Status = inStatus.value;

    Status = Status.toLowerCase();

    if(Status == "" || Status != "ativo" && Status != "inativo") {
        aceito = false;
        modal += "Status Invalido\n";
        inStatus.focus();
        return;
    }
}

function valTel() {
    var inTel = document.getElementById("inTel");
    var Tel = inTel.value.replace(/\D/g, '');;

    if(Tel == "" || !(Tel.length >= 10 && Tel.length <= 11) || (Tel.length == 11 && parseInt(Tel.substring(2, 3)) != 9)) {
        aceito = false;
        modal += "Telefone Invalido\n";
        inTel.focus();
        return;
    }

    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];

    if (codigosDDD.indexOf(parseInt(Tel.substring(0, 2))) == -1) {
        aceito = false;
        modal += "DDD Invalido\n";
        inTel.focus();
        return;
    }

    
}

function formatarTel() {
    var inTel = document.getElementById("inTel");
    var Tel = inTel.value.replace(/\D/g, '');
    if(Tel != "" && Tel.length == 11) {
    var TelefoneFormatado = "";

    var DDD = Tel.slice(0,2);
    var parte1 = Tel.slice(2,7);
    var parte2 = Tel.slice(7,11);

    TelefoneFormatado = "(" + DDD + ")" + parte1 + "-" + parte2;

    inTel.value = TelefoneFormatado;

    }
}

function valEmail() {
    var inMail = document.getElementById("inMail");
    var email = inMail.value;
    var usuario = email.substr(0, email.indexOf("@"));
    var dominio = email.substr(email.indexOf("@")+ 1, email.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    }
    else{
    aceito = false;
    modal += "Email Invalido\n";
    inMail.focus();
    return;
    }
}

// Função para validar o campo Imagem
function valImagem() {
    var inImagem = document.getElementById("inImagem"); // Obtém o campo "Imagem"
    var Imagem = inImagem.value;

    // Verifica se a imagem está vazia
    if(Imagem == "") {
        aceito = false;
        modal += "Imagem Invalida\n";
        inImagem.focus();
        return;
    }
}

function correto() {
    let [x, y] = TestaCPF(aceito);
    aceito = x; // Função externa que valida o CPF
    modal += y;
    if (aceito == true) { // Se todas as validações foram bem-sucedidas
        // Atualiza o modal de sucesso
        document.getElementById('modal_titulo').innerHTML = 'Cadastro inserido com sucesso';
        document.getElementById('modal_titulo_div').className = 'modal-header text-success';
        document.getElementById('modal_conteudo').innerHTML = 'As informações foram cadastradas com sucesso!';
        document.getElementById('modal_btn').innerHTML = 'Voltar';
        document.getElementById('modal_btn').className = 'btn btn-success';
        $('#modalAlert').modal('show'); // Exibe o modal
    } else {
        aceito = true; // Reinicia a variável "aceito" para uma nova tentativa de validação
        // Atualiza o modal de erro
        document.getElementById('modal_titulo').innerHTML = 'Cadastro Invalido';
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
        document.getElementById('modal_conteudo').innerHTML = "Há campos vazios ou invalidos!";
        document.getElementById('modal_erro').className = "modal-header text-danger";
        document.getElementById('modal_erro').innerText = modal;
        document.getElementById('modal_btn').innerHTML = 'Voltar';
        document.getElementById('modal_btn').className = 'btn btn-danger';
        $('#modalAlert').modal('show'); // Exibe o modal
        modal = "";
        event.preventDefault();
    }
}

function limparCampos() {
    document.getElementById("inNome").value = "";
    document.getElementById("inCPF").value = "";
    document.getElementById("inNascimento").value = "";
    document.getElementById("inDepartamento").value = "";
    document.getElementById("inCargo").value = "";
    document.getElementById("inSalario").value = "";
    document.getElementById("inStatus").value = "";
    document.getElementById("inEstado").value = "";
    document.getElementById("inDataAdmissao").value = "";
    document.getElementById("inTel").value = "";
    document.getElementById("inMail").value = "";
 }

var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos);

var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", valNome);
btCadastrar.addEventListener("click", valNascimento);
btCadastrar.addEventListener("click", valDepartamento);
btCadastrar.addEventListener("click", valCargo);
btCadastrar.addEventListener("click", valSalario);
btCadastrar.addEventListener("click", valStatus);
btCadastrar.addEventListener("click", valData);
btCadastrar.addEventListener("click", valTel);
btCadastrar.addEventListener("click", valEmail);
btCadastrar.addEventListener("click", valImagem);
btCadastrar.addEventListener("click", correto);