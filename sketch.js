
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree;
var boyImage;
var band;
var gameState = "initial"
function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(550,380,350,500)
	ground = new Ground(400,620,800,40)
	stone = new Stone(100,500,20,20)

	mango1 = new Mango(570,300,10)
	mango2 = new Mango(570,250,10)
	mango3 = new Mango(470,300,10)
	mango4 = new Mango(470,250,10)
	mango5 = new Mango(520,220,10)
	mango6 = new Mango(570,220,10)
	mango7 = new Mango(450,270,10)
	mango8 = new Mango(520,270,10)
	mango9 = new Mango(600,180,10)
	mango10 = new Mango(650,230,10)
	mango11= new Mango(650,280,10)
	mango12 = new Mango(690,300,10)

	band = new Band(stone.body, {x:100, y: 480})

	Engine.run(engine);
	console.log(mango1.r)
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  imageMode(CENTER)
  image (boyImage,150,550, 150,300)

  tree.display() 
  ground.display()
  stone.display()
   mango1.display()
   mango2.display()
   mango3.display()
   mango4.display()
   mango5.display()
   mango6.display()
   mango7.display()
   mango8.display()
   mango9.display()
   mango10.display()
   mango11.display()
   mango12.display()
   band.display()
 

   DetectCollision(stone , mango1)
   DetectCollision(stone , mango2)
   DetectCollision(stone , mango3)
   DetectCollision(stone , mango4)
   DetectCollision(stone , mango5)
   DetectCollision(stone , mango6)
   DetectCollision(stone , mango7)
   DetectCollision(stone , mango8)
   DetectCollision(stone , mango9)
   DetectCollision(stone , mango10)
   DetectCollision(stone , mango11)
   DetectCollision(stone , mango12)
}



function mouseDragged(){
 //   if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   // }
}


function mouseReleased(){
    band.fly();
    gameState = "launched";
}

function keyPressed(){

	if(keyCode == 32){
		Matter.Body.setPosition(stone.body, {x: 100 , y: 480})
		band.attach(stone.body)

	}
}

function DetectCollision(object1, object2){
 pos1 = object1.body.position
 pos2 = object2.body.position

 var distance = dist(pos1.x, pos1.y , pos2.x, pos2.y)
 console.log(object1.r+object2.r)
 // stone radius - 20
 // mango radius is 25 
 if(distance <= 25 + 10 ){
        Matter.Body.setStatic(object2.body, false);
 }

}