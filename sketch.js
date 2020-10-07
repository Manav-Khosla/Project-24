
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, 800, 20);
	bin1 = new dustbin(500, height, 200, 200);
	paper = new Paper(100, 395, 70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  paper.display();
  ground.display();
  bin1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:550, y:3000});
	}
}

