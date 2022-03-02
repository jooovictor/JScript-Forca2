let vidas = 7;

let arrayPalavras;
fetch("palavras.json")
    .then(response => response.json())
    .then(data => {
        arrayPalavras = data;
        //selecionaPalavra(arrayPalavras);
        //montarPalavraNaTela();
    })

function getTema () {
    
}

function selecionaPalavra(arrayPalavras) {
    const indicePalavra = parseInt(Math.random() * arrayPalavras.length);
    indiceTema = indiceTema + 1;
    palavraSorteada = arrayPalavras[indiceTema]["palavra" + (indiceTema + 1)]; //Dúvida com o [i]
    let palavraIncognita = palavraSorteada.fill('_');
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

function vitoria() {
    alert("ACERTOOOU!");
}

function derrota(palavra) {
    alert(`ERRRRROOOU!!! A palavra era ${PALAVRA SECRETA}`);
}
