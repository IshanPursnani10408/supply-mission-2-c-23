//objects of the game
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangle1,rectangle2,rectangle3;

//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//loading images 
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//creating the package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating the rectangles
	//rectangle 1
	rectangle1 = createSprite(400,655,200,10);
	rectangle1.shapeColor= "red" ;

	//rectangle 2 
	rectangle2= createSprite(500,610,10,100);
	rectangle2.shapeColor= "red" ;

	// rectangle 3
	rectangle3= createSprite(300,610,10,100);
	rectangle3.shapeColor= "red" ;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 9 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);

	rectangle1 = Bodies.rectangle(390,650,200,10, {isStatic:true} );
	World.add(world, rectangle1);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);

    
  }
}