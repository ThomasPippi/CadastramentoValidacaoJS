function cadastradoSucesso(){
    var nome = document.getElementById('usuario').value;
    alert("Obrigado " + nome + ", você foi cadastrado com sucesso!");
}

function tudoVerificado(){
    document.getElementById('verificado');
    document.getElementById("verificado").disabled = false;
}
function desabilita(){
    document.getElementById('verificado');
    document.getElementById("verificado").disabled = true;
}
var verificador_campos = 0;
var verificador_senha = 0;
var verificador_senhasenha = 0
function verificando(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var senhaV = document.getElementById('confirmaSenha').value;
    if(usuario != '' && senha != '' && senhaV != ''){
        document.getElementById('confere_campos').className = 'conferido';
        verificador_campos = 1;
    }
    else{
        document.getElementById('confere_campos').className = 'naoconferido';
        verificador_campos = 0
    }
    if(senha.length >= 6 && senha.length <= 10){
        document.getElementById('confere_senha').className = 'conferido';
        verificador_senha = 1;
    }
    else{
        document.getElementById('confere_senha').className = 'naoconferido';
        verificador_senha = 0;
    }
      
    if(senhaV === senha && senha != ''){
        document.getElementById('confere_senhasenha').className = 'conferido';
        verificador_senhasenha = 1;
    }
    else{
        document.getElementById('confere_senhasenha').className = 'naoconferido';
        verificador_senhasenha = 0;
    }

    if(verificador_campos == 1 && verificador_senha == 1 && verificador_senhasenha == 1){
        tudoVerificado();
    }
    else{
        desabilita();
    }
    

} 