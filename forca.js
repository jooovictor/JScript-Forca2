let vidas = 7;

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
function getTema () {
    tema = document.getElementById("select-temas").value;
    return tema;
}

function selecionaPalavra(arrayPalavras) {
    getTema();
    const indicePalavra = parseInt(Math.random() * arrayPalavras[tema].length);
    palavraSorteada = arrayPalavras[tema][indicePalavra];
    palavraSorteada = palavraSorteada.toUpperCase();
    return defineForca(palavraSorteada);
}

function defineForca(palavraSorteada) {
    palavraSecreta = palavraSorteada.split("")
    palavraResultado = palavraSecreta.map(char => { return "_"});
    palavraLimpa = palavraResultado.join("");
    let underline = document.getElementById('palavra-secreta')
    underline.innerHTML = (palavraLimpa);
    return palavraLimpa, palavraSecreta;
}




function vidasForca () {
    switch (vidas) {
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
/*
function vitoria() {
    alert("ACERTOOOU!");
}

function derrota(palavra) {
    alert(`ERRRRROOOU!!! A palavra era ${PALAVRA SECRETA}`);
}*/
