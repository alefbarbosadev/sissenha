
//ATIVAÇÃO DO LANÇAMENTO

function alerta() {
    var lancamentoOline = prompt("DIGITE O CÓDIGO DE LANÇAMENTO:");
    
    if (lancamentoOline === "01112020") {
            alert("PROCESSO DE LANÇAMENTO EFETUADO COM SUCESSO!");
            location.href = "cancelamento.html";
        } else {
            alert("PROCESSO CANCELADO");
        }
}

//CANCELA LANÇAMENTO

function cancela() {
    var lancamentoOline = prompt("DIGITE O CÓDIGO DE LANÇAMENTO:");
    
    if (lancamentoOline === "01112020") {
            alert("PROCESSO DESATIVADO COM SUCESSO!");
            location.href = "";
        } else {
            alert("PROCESSO CANCELADO");
        }
}