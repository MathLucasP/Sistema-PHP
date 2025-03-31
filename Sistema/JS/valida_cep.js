function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('inRua').value=("");
    document.getElementById('inBairro').value=("");
    document.getElementById('inCidade').value=("");
    document.getElementById('inUF').value=("");
    document.getElementById('inComplemento').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('inRua').value=(conteudo.logradouro);
    document.getElementById('inBairro').value=(conteudo.bairro);
    document.getElementById('inCidade').value=(conteudo.localidade);
    document.getElementById('inUF').value=(conteudo.uf);
    document.getElementById('inComplemento').value=(conteudo.complemento);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    var aceito = false;
    alert("CEP não encontrado.");
}
}

function pesquisacep() {
var modal;

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
        return [aceito = false, modal = "CEP Invalido\n"];
        limpa_formulário_cep();
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    alert("Digite um CEP.");
    return [aceito = false, modal = "CEP Invalido\n"];
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