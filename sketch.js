let imagem;
let musica;

function setup() {
  createCanvas(1000, 800);
  palavra = empada();
  musica.loop();
}
function preload(){
  imagem = loadImage("imagem.jpg")
  musica = loadSound("musica.mp3")
}
function draw() {
  background("violet");
  image(imagem,0,0,1000,800)
  fill("black");
  textSize(50);
  textAlign(CENTER,CENTER);
  batata();
  coxinha();
  empada();
}
function batata(){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400);
}
function coxinha(){
   fill("black");
   textSize(60);
   textAlign(CENTER,CENTER);
}

function empada(){
  let palavras = ["fisica", "coxinha", "vô nada",
"chico bento no shopping"];
  return random(palavras);
}