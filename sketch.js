const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var chao,teto,paredeE,paredeD;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  chao = new Chao(200,390,400,20);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  chao.display();
}

