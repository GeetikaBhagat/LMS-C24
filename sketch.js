
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(100, height-20, 20,PI/2)
	//Create the Bodies Here.
	ground = new Ground(width/2, height - 10, width, 20)

	left = new Dustbin(608,345,15,60);
	right = new Dustbin(743,345,15,60);
	bottom = new Dustbin(675,375,150,15)



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	Engine.update(engine)
	background(0);

	ball.show();
	ground.show();
	left.show();
	right.show();
	bottom.show();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80})
	}
}