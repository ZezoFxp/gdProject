const nome = document.getElementById('nome');
const nome2 = document.getElementById('nomeReu2');
const nome3 = document.getElementById('nomeReu3');
const nome4 = document.getElementById('nomeReu4');
const nome5 = document.getElementById('nomeReu5');
var jg1 = document.getElementById('jg-reu1'); // Obtém o elemento div
var jg2 = document.getElementById('jg-reu2'); // Obtém o elemento div
var jg3 = document.getElementById('jg-reu3'); // Obtém o elemento div
var jg4 = document.getElementById('jg-reu4'); // Obtém o elemento div
var jg5 = document.getElementById('jg-reu5'); // Obtém o elemento div
var select = document.getElementById('opt-reus'); // Obtém o <select> com id 'opt-reus'
var labelReu1 = document.getElementById('sim-ou-nao1');


function ocultarTodasAsDivs() {
    [jg1, jg2, jg3, jg4, jg5].forEach((div) => {
        div.style.display = "none";
    });
}

// Verifica se a opção selecionada é "1"
select.addEventListener('change', function () {

    ocultarTodasAsDivs();

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
    }
});
