const qtdAcoes = document.getElementById('qtd-acoes');
// pega a div inteira de quantidade de ações

var numAcao1 = document.getElementById('acoes-tipo1');
// pega a primeira div contendo os inputs e select do tipo de ação + numero do processo

var numAcao2 = document.getElementById('acoes-tipo2'); 
// pega a segunda div contendo os inputs e select do tipo de ação + numero do processo

var numAcao3 = document.getElementById('acoes-tipo3');
// pega a terceira div contendo os inputs e select do tipo de ação + numero do processo
var numAcao4 = document.getElementById('acoes-tipo4'); // pega a quarta div contendo os inputs e select do tipo de ação + numero do processo
var numAcao5 = document.getElementById('acoes-tipo5'); // pega a quinta div contendo os inputs e select do tipo de ação + numero do processo
var numAcao6 = document.getElementById('acoes-tipo6'); // pega a sexta div contendo os inputs e select do tipo de ação + numero do processo
var numAcao7 = document.getElementById('acoes-tipo7'); // pega a sétima div contendo os inputs e select do tipo de ação + numero do processo
var numAcao8 = document.getElementById('acoes-tipo8'); // pega a oitava div contendo os inputs e select do tipo de ação + numero do processo
var numAcao9 = document.getElementById('acoes-tipo9'); // pega a nona div contendo os inputs e select do tipo de ação + numero do processo
var numAcao10 = document.getElementById('acoes-tipo10'); // pega a décima div contendo os inputs e select do tipo de ação + numero do processo

var tipoAcoes = document.getElementById('tipo-acoes'); // pega TODA a div que escrevemos os numeros e selcionamos o tipo de ação
var selectAcoes = document.getElementById('acoes-select'); // pega o select da quantidade de ações
var selectTipo1 = document.getElementById('select-tipo1') // pega o select do tipo de cada ação
var selectTipo2 = document.getElementById('select-tipo2') // pega o select do tipo de cada ação
var selectTipo3 = document.getElementById('select-tipo3') // pega o select do tipo de cada ação
var selectTipo4 = document.getElementById('select-tipo4') // pega o select do tipo de cada ação
var selectTipo5 = document.getElementById('select-tipo5') // pega o select do tipo de cada ação
var selectTipo6 = document.getElementById('select-tipo6') // pega o select do tipo de cada ação
var selectTipo7 = document.getElementById('select-tipo7') // pega o select do tipo de cada ação
var selectTipo8 = document.getElementById('select-tipo8') // pega o select do tipo de cada ação
var selectTipo9 = document.getElementById('select-tipo9') // pega o select do tipo de cada ação
var selectTipo10 = document.getElementById('select-tipo10') // pega o select do tipo de cada ação

var contrato1 = document.getElementById('contratos1'); //pega o input do contrato 1
var cda1 = document.getElementById('cda1'); //pega o input da CDA 1

function ocultarContrato(){                         //oculta os campos de contrato e cda
    [contrato1, cda1].forEach((contrato) => {
        contrato.style.display = "none"
    })
};

function validarSelect(){

    if(selectTipo1.value === "ba"){
        contrato1.style.display = "block";
        return;
    }else if (selectTipo1.value === "execf"){
        cda1.style.display = "block";
        return;
    };
};

function ocultarNumAcao(){
    [numAcao1, numAcao2, numAcao3, numAcao5, numAcao6, numAcao7, numAcao8, numAcao9, numAcao10].forEach((acao) => {
        acao.style.display = "none";
    });
};


selectAcoes.addEventListener('change', function() {
    

    ocultarNumAcao();
    ocultarContrato();

    switch(selectAcoes.value){
        case "1":
            numAcao1.style.display = "block";
            break;
        case "2":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            break;
        case "3":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            break;
        case "4":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            break;
        case "5":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            numAcao5.style.display = "block"
            break;
        case "6":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            numAcao5.style.display = "block"
            numAcao6.style.display = "block"
            break;
        case "7":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            numAcao5.style.display = "block"
            numAcao6.style.display = "block"
            numAcao7.style.display = "block"
            break;
        case "8":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            numAcao5.style.display = "block"
            numAcao6.style.display = "block"
            numAcao7.style.display = "block"
            numAcao8.style.display = "block"
            break;
        case "9":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            numAcao5.style.display = "block"
            numAcao6.style.display = "block"
            numAcao7.style.display = "block"
            numAcao8.style.display = "block"
            numAcao9.style.display = "block"
            break;
        case "10":
            numAcao1.style.display = "block"
            numAcao2.style.display = "block"
            numAcao3.style.display = "block"
            numAcao4.style.display = "block"
            numAcao5.style.display = "block"
            numAcao6.style.display = "block"
            numAcao7.style.display = "block"
            numAcao8.style.display = "block"
            numAcao9.style.display = "block"
            numAcao10.style.display = "block"
            break;
            
            
        };


selectTipo1.addEventListener('change', ()=>{
    validarSelect();
})



});
