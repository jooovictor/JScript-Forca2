let arrayPalavras = [];
fetch("palavras.json")
    .then(response => response.json())
    .then(data => {
        arrayPalavras = data;
        selecionaPalavra(arrayPalavras);
        
    })

let tema;
let palavraSorteada;
let palavraSecreta = [];
let palavraResultado = [];
let palavraLimpa;
let underline;
let errou = [];
let erros = [];
let vida = 7;
let input;
let vitoria = 0;
let derrota = 0;
let desabilita;
const teclado = document.getElementById('teclado_virtual')

let evento = document.getElementById('submit-texto');


let reiniciar = document.querySelector("#reiniciar")
reiniciar.addEventListener("click", function () {
    location.reload();
});

function getTema () {
    tema = document.getElementById("select-temas").value;
    return tema;
}

function selecionaPalavra(arrayPalavras) {
    getTema();
    erros = [];
    errou.innerHTML = erros;
    vida = 7;
    vidasForca(vida);
    

    teclado.style.display = 'block';
    const indicePalavra = parseInt(Math.random() * arrayPalavras[tema].length);
    palavraSorteada = arrayPalavras[tema][indicePalavra];
    palavraSorteada = palavraSorteada.toUpperCase();
    return defineForca(palavraSorteada);
}

function defineForca(palavraSorteada) {
    palavraSecreta = palavraSorteada.split("")
    palavraResultado = palavraSecreta.map(char => { return "_"});
    palavraLimpa = palavraResultado.join("");
    underline = document.getElementById('palavra-secreta')
    underline.innerHTML = (palavraLimpa);
    return palavraLimpa, palavraSecreta;
}

function recebeLetra (letra) {
    let posicaoLetra = palavraSecreta.indexOf(letra);
    verificaLetraEscolhida(letra);

    if (palavraResultado.includes(letra)) {
        alert('Letra ja descoberta');
        return;
    } else if ( erros.includes(letra)) {
        alert('Letra ja descoberta!');
        return;
    }

    if (vida == 0) {
        computaDerrota();
    } else if (palavraLimpa.indexOf('_') === -1) {
        computaVitoria();
    }

    if (posicaoLetra == -1) {
        errou = document.getElementById("letras-erradas");
        erros.push(letra);
        errou.innerHTML = erros.join(', ');
        vidasForca(--vida)
    }

    while (posicaoLetra != -1) {
        palavraResultado[posicaoLetra] = letra;
        posicaoLetra = palavraSecreta.indexOf(letra, posicaoLetra + 1);
        palavraLimpa = palavraResultado.join("");
        underline = document.getElementById('palavra-secreta')
        underline.innerHTML = (palavraLimpa);
        console.log(palavraResultado);
        console.log(palavraSecreta);
    }

    if (vida == 0) {
        computaDerrota();
    } else if (palavraLimpa.indexOf('_') === -1) {
        computaVitoria();
    }
    return;
}

function verificaLetraEscolhida(letra) {
    desabilita = document.getElementById("button-" + letra.toLowerCase()).disabled = true;
}

function palpite(event) {
    event.preventDefault();
    let palpitePalavra = document.getElementById("palpite-texto");
    palpitePalavra = palpitePalavra.value;
    palpitePalavra = palpitePalavra.toUpperCase();
    palpitePalavra = palpitePalavra.split('');
    let palpitecerto;
    if (palpitePalavra.length == palavraSecreta.length){
        for (i=0; i <= palpitePalavra.length; i++) {
            if (palpitePalavra[i] == palavraSecreta[i]) {
                palpitecerto = true;
            }
            else {
                palpitecerto = false;
            }
        }
    } else {
        palpitecerto = false;
    }
    if (palpitecerto == false) {
        ativaInput();
        return computaDerrota();
    } else {
        underline.innerHTML = palavraSorteada;
        ativaInput();
        return computaVitoria();
    }
    return;
}

function ativaInput () {
    const botao = document.getElementById("palpite-sim-button");
    const palpite = document.getElementById("palpite-texto");
    const botaoPalpite = document.getElementById("submit-texto");
    
    let palpitas = palpite.style.display;
    if (palpitas == "none") {

        palpite.style.display = "block";
        botaoPalpite.style.display = "block";
    } else {
        palpite.style.display = "none";
        botaoPalpite.style.display = "none";
    }
}

function vidasForca (vida) {
 
    switch (vida) {
        case 7:
            document.getElementById('forca-img').src="./assets/images/Forca 0.png";
            break;
        case 6:
            document.getElementById('forca-img').src="./assets/images/Forca 1.png";
            break;
        case 5:
            document.getElementById('forca-img').src="./assets/images/Forca 2.png";
            break;
        case 4:
            document.getElementById('forca-img').src="./assets/images/Forca 3.png";
            break;
        case 3:
            document.getElementById('forca-img').src="./assets/images/Forca 4.png";
            break;
        case 2:
            document.getElementById('forca-img').src="./assets/images/Forca 5.png";
            break;
        case 1:
            document.getElementById('forca-img').src="./assets/images/Forca 6.png";
            break;
        case 0:
            document.getElementById('forca-img').src="./assets/images/Forca 7.png";
            break;
    }
}

function computaVitoria() {
    vitoriaHTML = document.getElementById("vitorias");
    vitoria++;
    vitoriaHTML.innerHTML = vitoria;
    vidasForca(vida);
    teclado.style.display = 'none';
    desabilia = false;
    return alert('Ganhaste');
}

function computaDerrota() {
    derrotaHTML = document.getElementById('derrotas');
    derrota++;
    derrotaHTML.innerHTML = derrota;
    vidasForca(vida);
    teclado.style.display = "none";
    
    return alert('Perdeste troxão, a palavra era: ' + palavraSorteada);
}

/*
function vitoria() {
    alert("ACERTOOOU!");
}
function derrota(palavra) {
    alert(`ERRRRROOOU!!! A palavra era ${PALAVRA SECRETA}`);
}*/

document.onkeyup = (event) => {
    const foco = document.getElementById("palpite-texto")
    if ( foco === document.activeElement) {
        return;
    } else if (event.key === "Enter") {
        selecionaPalavra(arrayPalavras);
        return;
    } else if (event.keyCode == 186) {
        input = event.key;
        recebeLetra(input.toUpperCase());
        return;
    } else if (event.keyCode > 90 || event.keyCode < 65) {
        return;
    }

    input = event.key;
    recebeLetra(input.toUpperCase());
}