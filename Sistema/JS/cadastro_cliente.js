// Variável global que indica se todos os campos do formulário foram validados com sucesso
var aceito = true;

var modal = "";

// Função que valida o campo "Nome"
function valNome() {
    var inNome = document.getElementById("inNome"); // Obtém o elemento do DOM com id "inNome"
    var nome = inNome.value;

    if (nome == "") { // Verifica se o campo está vazio
        aceito = false; // Define a variável "aceito" como falsa, indicando que a validação falhou
        modal += "Nome Invalido\n";
        inNome.focus();
        return;
    }
}

// Função que valida o campo "RG"
function valRG() {
    var inRG = document.getElementById("inRG"); // Obtém o elemento do DOM com id "inRG"
    var RG = inRG.value.replace(/[^\d]+/g, ''); // Remove todos os caracteres que não são dígitos

    if (RG.length != 9 || RG == "") { // Verifica se o RG tem exatamente 9 dígitos e se não está vazio
        aceito = false;
        modal += "RG Invalido\n";
        inRG.focus();
        return;
    } 
}

// Função que formata o campo "RG" ao inserir ou alterar seu valor
function formatRG() {
    var inRG = document.getElementById("inRG");
    var RG = inRG.value.replace(/[^\d]+/g, '');

    if (RG != "" && RG.length == 9) { // Verifica se o RG tem exatamente 9 dígitos e não está vazio
        var primeirodigitos = RG.slice(0, 2);
        var segundodigitos = RG.slice(2, 5);
        var terceirodigitos = RG.slice(5, 8);
        var quartodigitos = RG.slice(8, 9);

        inRG.value = primeirodigitos + "." + segundodigitos + "." + terceirodigitos + "-" + quartodigitos; 
    }
}

// Função que valida o campo "Número"
function valNum() {
    var inNum = document.getElementById("inNum");
    var Num = inNum.value;

    if (Num == "") { // Verifica se o campo está vazio
        aceito = false;
        modal += "Número Invalido\n";
        inNum.focus();
        return;
    }
}

// Função que valida o campo "Telefone"
function valTel() {
    var inTel = document.getElementById("inTel");
    var Tel = inTel.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos

    // Verifica se o telefone é válido, com base no número de dígitos e outros critérios
    if (Tel == "" || !(Tel.length >= 10 && Tel.length <= 11) || (Tel.length == 11 && parseInt(Tel.substring(2, 3)) != 9)) {
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
        96, 97, 98, 99]; // Lista de códigos DDD válidos

    if (codigosDDD.indexOf(parseInt(Tel.substring(0, 2))) == -1) { // Verifica se o DDD é válido
        aceito = false;
        modal += "DDD Invalido\n";
        inTel.focus();
        return;
    }

    formatarTel(); // Chama a função que formata o número de telefone
}

// Função que formata o campo "Telefone" ao inserir ou alterar seu valor
function formatarTel() {
    var inTel = document.getElementById("inTel");
    var Tel = inTel.value.replace(/\D/g, '');

    if (Tel != "" && Tel.length == 11) { // Verifica se o telefone tem exatamente 11 dígitos
        var TelefoneFormatado = "";

        var DDD = Tel.slice(0, 2);
        var parte1 = Tel.slice(2, 7);
        var parte2 = Tel.slice(7, 11);

        TelefoneFormatado = "(" + DDD + ")" + parte1 + "-" + parte2;

        inTel.value = TelefoneFormatado; // Define o valor formatado no campo
    } 
}

// Função que valida o campo "Email"
function valEmail() {
    var inMail = document.getElementById("inMail");
    var email = inMail.value;
    var usuario = email.substr(0, email.indexOf("@")); // Obtém a parte do usuário antes do "@"
    var dominio = email.substr(email.indexOf("@") + 1, email.length); // Obtém o domínio após o "@"

    // Verifica se o email é válido com base em uma série de critérios
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        // O email é válido, então a função não faz nada
    } else {
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

function TestaCPF() {
      var inCPF = document.getElementById("inCPF");
      var strCPF = inCPF.value.replace(/[^\d]+/g,'');
    formatCPF();
      var Soma;
      var Resto;
      Soma = 0;
    if (strCPF == "00000000000" ||strCPF == "11111111111" ||strCPF == "22222222222" ||strCPF == "33333333333" || strCPF == "44444444444" ||strCPF == "55555555555" ||strCPF == "66666666666" ||strCPF == "77777777777" || strCPF == "88888888888" ||strCPF == "99999999999")
    {
      return [aceito = false, modal += "CPF Invalido\n"];
    } 
  
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) )
      {
        return [aceito = false, modal += "CPF Invalido\n"];
      } 
  
    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) )
      {
        return [aceito = false, modal += "CPF Invalido\n"];
      }
  
      return aceito;
  }
  
  
  function formatCPF() {
      var inCPF = document.getElementById("inCPF"); 
      var cpf = inCPF.value.replace(/[^\d]+/g,'');
      if(cpf != "" && cpf.length == 11) {
      var primeirodigitos = cpf.slice(0, 3);
      var segundodigitos = cpf.slice(3, 6);
      var terceirodigitos = cpf.slice(6, 9);
      var quartodigitos = cpf.slice(9, 11); 
      
      inCPF.value = primeirodigitos + "." + segundodigitos + "." + terceirodigitos + "-" + quartodigitos;
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
            return [aceito = false, modal += "CEP Invalido\n"];
            limpa_formulário_cep();
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        alert("Digite um CEP.");
        return [aceito = false, modal += "CEP Invalido\n"];
        limpa_formulário_cep();
    }
    
    return aceito;
    
    }
    
    function formatCEP() {
        var inCEP = document.getElementById("inCEP");
        var cep = inCEP.value.replace(/\D/g, '');
        if(cep != "") {
        var resto = cep.slice(0, 5);
        var tresDigitos = cep.slice(5, 8);
    
        inCEP.value = resto + "-" + tresDigitos;
        } else {
            inCEP = "";
        }
    }
    
    var btBuscar = document.getElementById("btBuscar");
    btBuscar.addEventListener("click", pesquisacep);
// Função que é chamada ao tentar enviar o formulário
function correto() {
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

// Função que limpa todos os campos do formulário
function limparCampos() {
    document.getElementById("inNome").value = "";
    document.getElementById("inCPF").value = "";
    document.getElementById("inRG").value = "";
    document.getElementById("inCEP").value = "";
    document.getElementById("inRua").value = "";
    document.getElementById("inComplemento").value = "";
    document.getElementById("inBairro").value = "";
    document.getElementById("inCidade").value = "";
    document.getElementById("inUF").value = "";
    document.getElementById("inTel").value = "";
    document.getElementById("inNum").value = "";
    document.getElementById("inMail").value = "";
}

// Adiciona um evento de clique ao botão de limpar campos que chama a função "limparCampos"
var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos);

// Adiciona eventos de clique ao botão de cadastrar que chamam as funções de validação e a função final "correto"
var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", valNome);
btCadastrar.addEventListener("click", valRG);
btCadastrar.addEventListener("click", valNum);
btCadastrar.addEventListener("click", valTel);
btCadastrar.addEventListener("click", valEmail);
btCadastrar.addEventListener("click", valImagem);
btCadastrar.addEventListener("click", TestaCPF);
btCadastrar.addEventListener("click", pesquisacep);
btCadastrar.addEventListener("click", correto);
