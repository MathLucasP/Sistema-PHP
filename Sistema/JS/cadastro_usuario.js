// Variável global que controla se os dados foram aceitos
var aceito = true; 

// Variável global para armazenar mensagens de erro
var modal = ""; 

// Função para validar o nome do usuário
function valNome() {
    var inNome = document.getElementById("inNome"); // Captura o campo de entrada do nome
    var nome = inNome.value; // Armazena o valor inserido no campo nome

    // Verifica se o campo nome está vazio
    if(nome == "") {
        aceito = false; // Define a variável aceito como falsa
        modal += "Nome Invalido\n"; // Adiciona mensagem de erro ao modal
        inNome.focus(); // Coloca o foco no campo nome
        return; // Sai da função
    }
}

// Função para validar a senha
function valSenha() {
    var inSenha = document.getElementById("inSenha"); // Captura o campo de entrada da senha
    var senha = inSenha.value; // Armazena o valor inserido no campo senha

    // Verifica se o campo senha está vazio
    if(senha == "") {
        aceito = false; // Define a variável aceito como falsa
        inSenha.focus(); // Coloca o foco no campo senha
        return; // Sai da função
    }

    return senha; // Retorna o valor da senha
}

// Função para validar a confirmação de senha
function valConfSenha() {
    var inConfSenha = document.getElementById("inConfSenha"); // Captura o campo de confirmação de senha
    var Confsenha = inConfSenha.value; // Armazena o valor inserido no campo de confirmação de senha

    var senha = valSenha(); // Chama a função que retorna a senha para comparação
    // Verifica se o campo de confirmação de senha está vazio
    if(Confsenha == "") {
        aceito = false; // Define a variável aceito como falsa
        alert("Confirme a senha!"); // Exibe alerta solicitando confirmação de senha
        modal += "Senha Invalida\n"; // Adiciona mensagem de erro ao modal
        inConfSenha.focus(); // Coloca o foco no campo de confirmação de senha
        return; // Sai da função
    } 
    // Verifica se as senhas não coincidem
    else if(Confsenha != senha) {
        aceito = false; // Define a variável aceito como falsa
        alert("Senha está diferente."); // Exibe alerta indicando erro de confirmação de senha
        modal += "Senha Invalida\n"; // Adiciona mensagem de erro ao modal
        inConfSenha.focus(); // Coloca o foco no campo de confirmação de senha
        return; // Sai da função
    }
}

// Função para validar o email
function valEmail() {
    var inMail = document.getElementById("inMail"); // Captura o campo de entrada de email
    var email = inMail.value; // Armazena o valor inserido no campo email
    var usuario = email.substr(0, email.indexOf("@")); // Extrai o usuário do email
    var dominio = email.substr(email.indexOf("@")+ 1, email.length); // Extrai o domínio do email

    // Valida se o email atende aos requisitos básicos
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        // Se todas as condições forem verdadeiras, o email é considerado válido
    } else {
        aceito = false; // Define a variável aceito como falsa
        modal += "Email Invalido\n"; // Adiciona mensagem de erro ao modal
        inMail.focus(); // Coloca o foco no campo de email
        return; // Sai da função
    }
}

// Função para verificar se todas as validações foram aceitas
function correto() {
    if (aceito == true) { // Se todas as validações forem bem-sucedidas
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
        document.getElementById('modal_erro').innerText = modal; // Exibe as mensagens de erro acumuladas
        document.getElementById('modal_btn').innerHTML = 'Voltar';
        document.getElementById('modal_btn').className = 'btn btn-danger';
        $('#modalAlert').modal('show'); // Exibe o modal
        modal = ""; // Limpa as mensagens de erro
        event.preventDefault(); // Impede o envio do formulário
    }
}

// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById("inNome").value = ""; // Limpa o campo nome
    document.getElementById("inMail").value = ""; // Limpa o campo email
    document.getElementById("inSenha").value = ""; // Limpa o campo senha
    document.getElementById("inConfSenha").value = ""; // Limpa o campo de confirmação de senha
}

// Captura o botão de limpar campos e adiciona um evento de clique que executa a função limparCampos
var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos);

// Captura o botão de cadastro e adiciona eventos de clique para validar os campos e exibir o modal
var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", valNome); // Valida o nome
btCadastrar.addEventListener("click", valEmail); // Valida o email
btCadastrar.addEventListener("click", valConfSenha); // Valida a confirmação de senha
btCadastrar.addEventListener("click", correto); // Exibe o modal de sucesso ou erro
