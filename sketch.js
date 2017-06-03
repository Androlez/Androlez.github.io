//Ejercicio Base 1
//Taller Intro a la programación en p5
//Puerto Varas C

var foto;
function preload() {
foto=loadImage("Donald Duck.png");}


function setup() {
createCanvas(800,500);


}

function draw() {
	image(foto,0,0,width,height);
}
