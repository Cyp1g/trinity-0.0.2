var player;
var testEnemy;
var y,x;

function setup() {
  createCanvas(800,800);
  player = new Jugador(100,100,400,400,20,20);
  
  testEnemy = new Enemies(25,600,600,20,20);
}

function draw() {
  background(113,248,7);  
  player.display();
  player.moves();
  y=player.position.y;
  x=player.position.x;
  testEnemy.display();
  testEnemy.followy(y);
  testEnemy.followx(x);
}