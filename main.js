const nome = document.getElementById('nome');
const nome2 = document.getElementById('nomeReu2');
const nome3 = document.getElementById('nomeReu3');
const nome4 = document.getElementById('nomeReu4');
const nome5 = document.getElementById('nomeReu5');
const nome6 = document.getElementById('nomeReu6');
const nome7 = document.getElementById('nomeReu7');
const nome8 = document.getElementById('nomeReu8');
const nome9 = document.getElementById('nomeReu9');
const nome10 = document.getElementById('nomeReu10');

var jg1 = document.getElementById('jg-reu1'); // Obtém o elemento div
var jg2 = document.getElementById('jg-reu2'); // Obtém o elemento div
var jg3 = document.getElementById('jg-reu3'); // Obtém o elemento div
var jg4 = document.getElementById('jg-reu4'); // Obtém o elemento div
var jg5 = document.getElementById('jg-reu5'); // Obtém o elemento div
var jg6 = document.getElementById('jg-reu6'); // Obtém o elemento div
var jg7 = document.getElementById('jg-reu7'); // Obtém o elemento div
var jg8 = document.getElementById('jg-reu8'); // Obtém o elemento div
var jg9 = document.getElementById('jg-reu9'); // Obtém o elemento div
var jg10 = document.getElementById('jg-reu10'); // Obtém o elemento div

var select = document.getElementById('opt-reus'); // Obtém o <select> com id 'opt-reus'
var labelReu1 = document.getElementById('sim-ou-nao1');


function ocultarTodasAsJg() {
    [jg1, jg2, jg3, jg4, jg5, jg6, jg7, jg8, jg9, jg10].forEach((div) => {
        div.style.display = "none";
    });
}

// Verifica se a opção selecionada é "1"
select.addEventListener('change', function () {

    
    ocultarTodasAsJg();

    switch (select.value) {
        case "1":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            break;
        case "2":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            break;
        case "3":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            break;
        case "4":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            break;
        case "5":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            jg5.style.display = "block";
            break;
        case "6":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            jg5.style.display = "block";
            jg6.style.display = "block";
            break;
        case "7":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            jg5.style.display = "block";
            jg6.style.display = "block";
            jg7.style.display = "block";           
            break;
        case "8":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            jg5.style.display = "block";
            jg6.style.display = "block";
            jg7.style.display = "block";           
            jg8.style.display = "block";           
            break;
        case "9":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            jg5.style.display = "block";
            jg6.style.display = "block";
            jg7.style.display = "block";           
            jg8.style.display = "block";           
            jg9.style.display = "block";           
            break;
        case "10":
            labelReu1.textContent = nome.value;
            jg1.style.display = "block";
            jg2.style.display = "block";
            jg3.style.display = "block";
            jg4.style.display = "block";
            jg5.style.display = "block";
            jg6.style.display = "block";
            jg7.style.display = "block";           
            jg8.style.display = "block";           
            jg9.style.display = "block";           
            jg10.style.display = "block";
            break;
        }
});
