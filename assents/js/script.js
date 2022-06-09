let listaDeCoisas = new Array();
let botaoEnvio = document.getElementById("botaoEnvio");


function enviarDados() {
    addItemAoArray();
    exibirConteudo();
    limpar();
}

function addItemAoArray(){
    let conteudoInput = document.getElementById("addList").value;
    listaDeCoisas.push(conteudoInput);
}

function exibirConteudo() {
    console.log(listaDeCoisas);
    document.getElementById("listaDeAfazeres").innerHTML = '';
    for (i = 0; i < listaDeCoisas.length; i++){
        document.getElementById("listaDeAfazeres").innerHTML += `<input type='checkbox'> <label class>${listaDeCoisas[i]}</label><br>`;
    }
    
}
    

function limpar() {
    let conteudoInput = document.getElementById("addList").value= '';
}

