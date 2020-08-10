const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	paper = new Paper(100,50,10);
	console.log(paper.body);

	box1 = new Box(400,650,240,20);
	box2 = new Box(510,605,20,100);
	box3 = new Box(290,605,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  rectMode(CENTER);
  fill(255,0,0);
  rect(ground.position.x,ground.position.y,width,10);
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});
  }
}