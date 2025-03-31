var aceito = true;
var modal = "";

function valRazao() {
    var inRazao = document.getElementById("inRazao");
    var Razao = inRazao.value;

    if(Razao == "") {
        inRazao.focus();
        modal += "Razão Social Invalida\n";
        aceito = false;
        return;
    }
}

function valCadastramento() {
    var inCadastramento = document.getElementById("inCadastramento");
    var Cadastramento = inCadastramento.value;

    if(Cadastramento.length != 10) {
        aceito = false;
        modal += "Data de Cadastro Invalido\n";
        inCadastramento.focus();
        return;
    }

    var partesData = Cadastramento.split('/');
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
    inCadastramento.focus();
    return;
}
// Valida número de dias do mês
else if (dia > diasNoMes[mes]) {
    aceito = false;
    inCadastramento.focus();
    return;
}
}

function formatarCadastro() {
    var inCadastramento = document.getElementById("inCadastramento");
    var Cadastramento = inCadastramento.value.replace(/\D/g, '');
    if(Cadastramento != "" && Cadastramento.length == 8) {
    var CadastramentoFormatado = "";

    var dia = Cadastramento.slice(0,2);
    var mes = Cadastramento.slice(2,4);
    var ano = Cadastramento.slice(4,8);

    CadastramentoFormatado = dia + "/" + mes + "/" + ano;

    inCadastramento.value = CadastramentoFormatado;
    }
}


function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('inRua').value=("");
    document.getElementById('inBairro').value=("");
    document.getElementById('inCidade').value=("");
    document.getElementById('inUF').value=("");
    document.getElementById('inComplemento').value=("");
    document.getElementById("inIBGE").value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('inRua').value=(conteudo.logradouro);
    document.getElementById('inBairro').value=(conteudo.bairro);
    document.getElementById('inCidade').value=(conteudo.localidade);
    document.getElementById('inUF').value=(conteudo.uf);
    document.getElementById('inComplemento').value=(conteudo.complemento);
    document.getElementById("inIBGE").value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep() {

//Nova variável "cep" somente com dígitos.
var inCEP = document.getElementById("inCEP").value;
var cep = inCEP.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        aceito = false;
        modal += "CEP Invalido\n";
        limpa_formulário_cep();
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    alert("Digite um CEP.");
    modal += "CEP Invalido\n";
}
}

function formatCEP() {
    var inCEP = document.getElementById("inCEP");
    var cep = inCEP.value.replace(/\D/g, '');
    if(cep != "" && cep.length == 8) {
    var resto = cep.slice(0, 5);
    var tresDigitos = cep.slice(5, 8);

    inCEP.value = resto + "-" + tresDigitos;
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
    validarCNPJ();

    pesquisacep();
    if (aceito == true) { // Se todas as validações foram bem-sucedidas
        // Atualiza o modal de sucesso
        document.getElementById('modal_titulo').innerHTML = 'Cadastro inserido com sucesso';
        document.getElementById('modal_titulo_div').className = 'modal-header text-success';
        document.getElementById('modal_conteudo').innerHTML = 'As informações foram cadastradas com sucesso!';
        document.getElementById('modal_erro').className = "modal-header text-danger";
        document.getElementById('modal_erro').innerText = "";
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
   document.getElementById("inRazao").value = "";
   document.getElementById("inCNPJ").value = "";
   document.getElementById("inCadastramento").value = "";
   document.getElementById("inCEP").value = "";
   document.getElementById("inRua").value = "";
   document.getElementById("inComplemento").value = "";
   document.getElementById("inBairro").value = "";
   document.getElementById("inCidade").value = "";
   document.getElementById("inUF").value = "";
   document.getElementById("inIBGE").value = "";
   document.getElementById("inTel").value = "";
   document.getElementById("inMail").value = "";
}

var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos);

var btBuscar = document.getElementById("btBuscar");
btBuscar.addEventListener("click", pesquisacep);

var btCadastrar = document.getElementById("btCadastrar");

btCadastrar.addEventListener("click", valRazao);
btCadastrar.addEventListener("click", valCadastramento);
btCadastrar.addEventListener("click", valTel);
btCadastrar.addEventListener("click", valEmail);
btCadastrar.addEventListener("click", valImagem);
btCadastrar.addEventListener("click", correto);