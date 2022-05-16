var imagens = ["imagens/alita.png", "imagens/aranha.jpg", "imagens/capitao.jpg", "imagens/doutor.webp", "imagens/word.jpg", "imagens/maze.jpg"]
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 6;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);