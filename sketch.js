const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world;
var stone,rubber,hammer,iron;

function setup() {
	var canvas = createCanvas(1200, 600);
    engine = Engine.create();
	  world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    iron = new Iron(300,350);
	  stone = new Stone(700,320,100,100);

	  rubber1 = new Rubber(900,450,70);
	  hammer = new Hammer(10,100);
	  
  
}


function draw() {
  rectMode(CENTER);
  background('lightBlue');
  Engine.update(engine);
   
  stone.display();
  ground.display();
  iron.display();
  rubber1.display();
  hammer.display();
  
  
 
}



