// Função que verifica os dados inseridos no formulário de login
function modal() {
    var inLogin = document.getElementById("inLogin");
    var inSenha = document.getElementById("inSenha");

    var login = inLogin.value; // Obtém o valor do campo de login
    if(login == "") { // Verifica se o campo de login está vazio
        alert("Insira um login");
        inLogin.focus(); // Move o foco para o campo de login
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    var senha = inSenha.value; // Obtém o valor do campo de senha
    if(senha == "") { // Verifica se o campo de senha está vazio
        alert("Insira uma senha");
        inSenha.focus(); // Move o foco para o campo de senha
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    if((login == loginAdmin && senha != senhaAdmin) || (login == loginSadmin && senha != senhaSadmin)) { // Verifica se a senha inserida não é igual à senha do administrador
        alert("Senha Invalida!");
        inLogin.focus();
        event.preventDefault(); // Impede o envio do formulário
        return;
        
    }

    // Se as credenciais estiverem corretas, abre o menu na mesma janela
    window.open("menu.php", "_self");

}

// Adiciona um evento de clique ao botão de login, chamando a função verificarDados quando o botão é clicado
var btLogar = document.getElementById("btLogar");
btLogar.addEventListener('click', verificarDados);