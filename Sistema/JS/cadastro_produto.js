// Variável para controlar se o formulário é aceito
var aceito = true;

// Variável para armazenar mensagens de erro
var modal = "";

// Função para validar o campo Nome
function valNome() {
    var inNome = document.getElementById("inNome"); // Obtém o campo "Nome"
    var nome = inNome.value;

    // Verifica se o nome está vazio
    if(nome == "") {
        aceito = false; // Marca que o formulário não é aceito
        modal += "Nome Invalido\n"; // Adiciona mensagem de erro
        inNome.focus(); // Foca no campo "Nome" para o usuário corrigir
        return; // Interrompe a função
    }
}

// Função para validar o campo Código
function valCodigo() {
    var inCodigo = document.getElementById("inCodigo"); // Obtém o campo "Código"
    var Codigo = inCodigo.value;

    // Verifica se o código está vazio
    if(Codigo == "") {
        aceito = false;
        modal += "Codigo Invalido\n";
        inCodigo.focus();
        return;
    }
}

// Função para validar o campo Marca
function valMarca() {
    var inMarca = document.getElementById("inMarca"); // Obtém o campo "Marca"
    var Marca = inMarca.value;

    // Verifica se a marca está vazia
    if(Marca == "") {
        aceito = false;
        modal += "Marca Invalida\n";
        return;
    }
}

// Função para validar o campo Peso
function valPeso() {
    var inPeso = document.getElementById("inPeso"); // Obtém o campo "Peso"
    var Peso = inPeso.value;

    // Verifica se o peso está vazio
    if(Peso == "") {
        aceito = false;
        modal += "Peso Invalido\n";
        inPeso.focus();
        return;
    }
}

// Função para validar o campo Preço de Custo
function valPrecoC() {
    var inPrecoCusto = document.getElementById("inPrecoCusto"); // Obtém o campo "Preço de Custo"
    var precoCusto = inPrecoCusto.value;

    // Verifica se o preço de custo está vazio
    if(precoCusto == "") {
        aceito = false;
        modal += "Preco Custo Invalido\n";
        inPrecoCusto.focus();
        return;
    }

    return Number(precoCusto); // Converte o valor para número
}

// Função para validar o campo Preço de Venda
function valPrecoV() {
    var inPrecoVenda = document.getElementById("inPrecoVenda"); // Obtém o campo "Preço de Venda"
    var precoVenda = inPrecoVenda.value;

    // Verifica se o preço de venda está vazio
    if(precoVenda == "") {
        aceito = false;
        modal += "Preço de Venda Invalido\n";
        inPrecoVenda.focus();
        return;
    }

    return Number(precoVenda); // Converte o valor para número
}

// Função para calcular o lucro
function calcLucro() {
    var precoCusto = valPrecoC(); // Obtém o valor do preço de custo
    var precoVenda = valPrecoV(); // Obtém o valor do preço de venda

    var Lucro = precoVenda - precoCusto; // Calcula o lucro
    var LucroPorcentagem = (Lucro / precoCusto) * 100; // Calcula a porcentagem de lucro

    // Verifica se o cálculo resultou em um valor inválido
    if(isNaN(LucroPorcentagem)) {
        aceito = false;
        document.getElementById("inLucro").value = ""; // Limpa o campo "Lucro"
        return;
    } else {
        document.getElementById("inLucro").value = (LucroPorcentagem.toFixed(2) + "%"); // Exibe o lucro formatado
    }
}

// Função para validar o campo Unidade
function valUnidade() {
    var inUnidade = document.getElementById("inUnidade"); // Obtém o campo "Unidade"
    var unidade = inUnidade.value;

    // Verifica se a unidade está vazia
    if(unidade == "") {
        aceito = false;
        modal += "Unidade Invalido\n";
        inUnidade.focus();
        return;
    }
}

// Função para validar o campo Fornecedor
function valFornecedor() {
    var inFornecedor = document.getElementById("inFornecedor"); // Obtém o campo "Fornecedor"
    var fornecedor = inFornecedor.value;

    // Verifica se o fornecedor está vazio
    if(fornecedor == "") {
        aceito = false;
        modal += "Fornecedor Invalido\n";
        inFornecedor.focus();
        return;
    }
}

// Função para validar o campo Referência
function valReferencia() {
    var inReferencia = document.getElementById("inReferencia"); // Obtém o campo "Referência"
    var Referencia = inReferencia.value;

    // Verifica se a referência está vazia
    if(Referencia == "") {
        aceito = false;
        modal += "Referencia Invalida\n";
        inReferencia.focus();
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

// Função para verificar se todas as validações foram aceitas e exibir o modal de acordo
function correto() {
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
        modal = ""; // Limpa a mensagem de erro para a próxima tentativa
        event.preventDefault(); // Previne o envio do formulário se houver erro
    }
}

// Função para limpar todos os campos do formulário
function limparCampos() {
    document.getElementById("inNome").value = "";
    document.getElementById("inCodigo").value = "";
    document.getElementById("inMarca").value = "";
    document.getElementById("inPeso").value = "";
    document.getElementById("inPrecoCusto").value = "";
    document.getElementById("inPrecoVenda").value = "";
    document.getElementById("inLucro").value = "";
    document.getElementById("inUnidade").value = "";
    document.getElementById("inFornecedor").value = "";
    document.getElementById("inReferencia").value = "";
    document.getElementById("inImagem").value = "";
}

// Adiciona um listener ao botão de limpar campos para executar a função "limparCampos"
var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos); 

// Adiciona listeners ao botão de cadastrar, que chamam todas as funções de validação e a função "correto"
var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", valCodigo);
btCadastrar.addEventListener("click", valNome);
btCadastrar.addEventListener("click", valMarca);
btCadastrar.addEventListener("click", valPeso);
btCadastrar.addEventListener("click", valPrecoC);
btCadastrar.addEventListener("click", valPrecoV);
btCadastrar.addEventListener("click", valUnidade);
btCadastrar.addEventListener("click", valFornecedor);
btCadastrar.addEventListener("click", valReferencia);
btCadastrar.addEventListener("click", valImagem);
btCadastrar.addEventListener("click", correto);
