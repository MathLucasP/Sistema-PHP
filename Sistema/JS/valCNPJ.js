function validarCNPJ(aceito) {
    var modal;
    var inCNPJ = document.getElementById("inCNPJ");
    var cnpj = inCNPJ.value.replace(/[^\d]+/g,'');
 
    if(cnpj == "" || cnpj.length != 14) {
        inCNPJ.focus();
        modal += "CNPJ Invalido\n";
        return [aceito = false, modal = "CNPJ Invalido\n"];
    }
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999") {
        inCNPJ.focus();    
        return [aceito = false, modal += "CNPJ Invalido\n"];
        }
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
            pos = 9;
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        inCNPJ.focus();
        return [aceito = false, modal += "CNPJ Invalido\n"];
    }    
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
            pos = 9;
      }    
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        inCNPJ.focus();
        return [aceito = false, modal += "CNPJ Invalido\n"];
    } 
           
    return aceito;
    
}

function formatarCNPJ() {
    var inCNPJ = document.getElementById("inCNPJ");
    var cnpj = inCNPJ.value.replace(/[^\d]+/g,'');
    if(cnpj != "" && cnpj.length == 14) {
    var primeirodigitos = cnpj.slice(0, 2);
    var segundodigitos = cnpj.slice(2, 5);
    var terceirodigitos = cnpj.slice(5, 8);
    var quartodigitos = cnpj.slice(8, 12);
    var quintodigitos = cnpj.slice(12, 14);  
    
    inCNPJ.value = primeirodigitos + "." + segundodigitos + "." + terceirodigitos + "/" + quartodigitos + "-" + quintodigitos;
    }
}