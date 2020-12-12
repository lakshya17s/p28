
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone;
var ground;
var tree ;
var back;
var boy;
var mango
,mango2
,mango3
,mango4
,mango5;
var chain;
function preload()
{
	back = loadImage("PM/background.jpg");
boy = loadImage("PM/boy.png");
tree = loadImage("PM/tree.png");
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone  = new Stone(135+200,460,30);
ground = new Ground(width/2,600,width,20);
var Ty = ground.body.position.y;
//tree = new Tree(1100,500,20,250);




mango = new Mango(1190,Ty-350,20);
mango2= new Mango(1130,Ty-390,20);
mango3 = new Mango(1220,Ty-325,20);
mango4 = new Mango(1280,Ty-390,20);
mango5 = new Mango(1300,Ty-310,20);
chain = new Chain(stone.body,{x:135+200,y:460});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CORNER);
  Engine.update(engine);
  background(back);
  imageMode(CENTER);
  image(boy,200+200,540,200,300);
  image(tree,1200,350,250,550);
  //tree.display();
textSize(20);
  text("PRESS SPACE TO GET A RESPAWN:)",200,200);
  stone.display();
  ground.display();
 
  mango.display();
 mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();
  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  keyPress();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 
 
}
function mouseReleased(){
  chain.fly();
 
}
function detectCollision(s,m){
   Sb = s.body.position;
   Mb = m.body.position;
  var distance = dist(Sb.x,Sb.y,Mb.x,Mb.y);
  if(distance<m.radius+s.radius){
    Matter.Body.setStatic(m.body,false);
  }
 
 console.log(m.radius+s.radius);

}
function keyPress(){
  if(keyDown("space")){
    Matter.Body.setPosition(stone.body,{x:135+200,y:460})
 chain.attach(stone.body);
  }

}





