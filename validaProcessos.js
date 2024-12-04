/*DECLARAÇÃO DE VARIÁVEIS
--------------------------------------------------------------------------------------------------------------*/

const formProcessos = document.getElementById('form-processos');
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
var contrato2 = document.getElementById('contratos2'); //pega o input do contrato 2
var cda2 = document.getElementById('cda2'); //pega o input da CDA 2
var contrato3 = document.getElementById('contratos3'); //pega o input do contrato 3
var cda3 = document.getElementById('cda3'); //pega o input da CDA 3
var contrato4 = document.getElementById('contratos4'); //pega o input do contrato 4
var cda4 = document.getElementById('cda4'); //pega o input da CDA 4
var contrato5 = document.getElementById('contratos5'); //pega o input do contrato 5
var cda5 = document.getElementById('cda5'); //pega o input da CDA 5
var contrato6 = document.getElementById('contratos6'); //pega o input do contrato 6
var cda6 = document.getElementById('cda6'); //pega o input da CDA 6
var contrato7 = document.getElementById('contratos7'); //pega o input do contrato 7
var cda7 = document.getElementById('cda7'); //pega o input da CDA 7
var contrato8 = document.getElementById('contratos8'); //pega o input do contrato 8
var cda8 = document.getElementById('cda8'); //pega o input da CDA 8
var contrato9 = document.getElementById('contratos9'); //pega o input do contrato 9
var cda9 = document.getElementById('cda9'); //pega o input da CDA 9
var contrato10 = document.getElementById('contratos10'); //pega o input do contrato 10
var cda10 = document.getElementById('cda10'); //pega o input da CDA 10

const confirmBtn2 = document.getElementById('confirm-btn2');
const backBtn2 = document.getElementById('back-btn2');

/*DECLARANDO FUNÇÕES
----------------------------------------------------------------------------------------------------------------*/

function ocultarContrato(){                         //oculta os campos de contrato e cda
    [contrato1, contrato2, contrato3, contrato4, contrato5, contrato6, contrato7, contrato8, contrato9, contrato10,cda1, cda2, cda3, cda4, cda5, cda6, cda7, cda8, cda9, cda10].forEach((contrato) => {
        contrato.style.display = "none"
    })
};

function validarSelect(){              //valida a opção marcada nos selects de ação

    if(selectTipo1.value === "execf") {
        cda1.style.display = "block"; // Exibe o campo CDA1
    }else if (selectTipo1.value !== "") {
        contrato1.style.display = "block"; // Exibe o campo Contrato1
    };

    if(selectTipo2.value === "execf") {
        cda2.style.display = "block"; // Exibe o campo CDA2
    }else if (selectTipo2.value !== "") {
        contrato2.style.display = "block"; // Exibe o campo Contrato2
    };

    if(selectTipo3.value === "execf") {
        cda3.style.display = "block"; // Exibe o campo CDA3
    }else if (selectTipo3.value !== "") {
        contrato3.style.display = "block"; // Exibe o campo Contrato3
    };

    if(selectTipo4.value === "execf") {
        cda4.style.display = "block"; // Exibe o campo CDA4
    }else if (selectTipo4.value !== "") {
        contrato4.style.display = "block"; // Exibe o campo Contrato4
    };

    if(selectTipo5.value === "execf") {
        cda5.style.display = "block"; // Exibe o campo CDA5
    }else if (selectTipo5.value !== "") {
        contrato5.style.display = "block"; // Exibe o campo Contrato5
    };

    if(selectTipo6.value === "execf") {
        cda6.style.display = "block"; // Exibe o campo CDA6
    }else if (selectTipo6.value !== "") {
        contrato6.style.display = "block"; // Exibe o campo Contrato6
    };

    if(selectTipo7.value === "execf") {
        cda7.style.display = "block"; // Exibe o campo CDA7
    }else if (selectTipo7.value !== "") {
        contrato7.style.display = "block"; // Exibe o campo Contrato7
    };

    if(selectTipo8.value === "execf") {
        cda8.style.display = "block"; // Exibe o campo CDA8
    }else if (selectTipo8.value !== "") {
        contrato8.style.display = "block"; // Exibe o campo Contrato8
    };

    if(selectTipo9.value === "execf") {
        cda9.style.display = "block"; // Exibe o campo CDA9
    }else if (selectTipo9.value !== "") {
        contrato9.style.display = "block"; // Exibe o campo Contrato9
    };

    if(selectTipo10.value === "execf") {
        cda10.style.display = "block"; // Exibe o campo CDA10
    }else if (selectTipo10.value !== "") {
        contrato10.style.display = "block"; // Exibe o campo Contrato10
    };
};

function ocultarNumAcao(){                     //Oculta todos os campos de n° do processo
    [numAcao1, numAcao2, numAcao3, numAcao5, numAcao6, numAcao7, numAcao8, numAcao9, numAcao10].forEach((acao) => {
        acao.style.display = "none";
    });
};

/*DECLARAÇÃO DE EVENTS
--------------------------------------------------------------------------------------------------------------*/

selectAcoes.addEventListener('change', function() {         //exibe os campos de processo e as opt de tipo de ação
    

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

});

selectTipo1.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo2.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo3.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo4.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo5.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo6.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo7.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo8.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo9.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

selectTipo10.addEventListener('change', ()=>{
    ocultarContrato();
    validarSelect();
})

backBtn2.addEventListener('click', ()=>{
    formReu.style.display = "block";
    formProcessos.style.display = "none";
})