
function TestaCPF(aceito) {
  var modal;
	var inCPF = document.getElementById("inCPF");
	var strCPF = inCPF.value.replace(/[^\d]+/g,'');
  formatCPF();
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000" ||strCPF == "11111111111" ||strCPF == "22222222222" ||strCPF == "33333333333" || strCPF == "44444444444" ||strCPF == "55555555555" ||strCPF == "66666666666" ||strCPF == "77777777777" || strCPF == "88888888888" ||strCPF == "99999999999")
  {
    return [aceito = false, modal = "CPF Invalido\n"];
  } 

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) )
    {
      return [aceito = false, modal = "CPF Invalido\n"];
    } 

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
    {
      return [aceito = false, modal = "CPF Invalido\n"];
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