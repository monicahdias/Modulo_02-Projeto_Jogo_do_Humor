var cont = 0;
const botao = document.getElementById("button");
botao.addEventListener("click",mudarImagem);

function mudarImagem(){
    cont++;
    console.log(cont);
    if(cont == 1){
        document.getElementById("img1").src= "./images/img2.png";
        document.getElementById("tipo").innerText = "PREOCUPADA";
        document.getElementById("situacao").innerText = "Quando eles vão arrumar um emprego?";
    }
    else if (cont == 2) {
        document.getElementById("img1").src ="./images/img3.png";
        document.getElementById("tipo").innerText = "ZEN";
        document.getElementById("situacao").innerText = "Não me perturba que hoje eu tô tranquila!";
    } else if (cont == 3) {
        document.getElementById("img1").src ="./images/img4.png";
        document.getElementById("tipo").innerText = "MANDONA";
        document.getElementById("situacao").innerText = "Já FALEI pra você tomar banho, AGORA!";
    } else if (cont == 4) {
        document.getElementById("img1").src ="./images/img5.png";
        document.getElementById("tipo").innerText = "DRAMÁTICA";
        document.getElementById("situacao").innerText = "Só vão me dar valor quando eu estiver MORTA!";
    }
    else {
        document.getElementById("img1").src ="./images/img1.png";
        document.getElementById("tipo").innerText = "PLENA";
        document.getElementById("situacao").innerText = "Vou bater perna até as crianças voltarem";
        cont = 0;
    }
}