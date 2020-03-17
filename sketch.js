// You could have multiple flags like: start, launch to indicate the state of the game.
/*
const {Engine} = Matter 
is the same as const Engine = Matter.Engine
*/
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var Engine = Matter.Engine;
const World= Matter.World;
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;
Body=Matter.Body;
Mouse=Matter.Mouse;
MouseConstraint=Matter.MouseConstraint;
Constraints=Matter.Constraints;
Composite=Matter.Composite;
Composites=Matter.Composites;
Detector=Matter.Detector;

var engine, world;
var rect1,dome,cir1;
var backgroundImg;
//var bird, slingshot;
var gamestate = "load";
var ground, platform;

var bombCount=4;

function preload() {
    backgroundImg = loadImage("bg.png");
    bombsA=[];


}

// Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,canvas.height-10,800,20);
    platform = new Ground(150, canvas.height-70, 300, 100);

    cannonBase1 = new BaseClass(200,265,100,30);
   //cannonBase2 = new BaseClass(200,234,75,30);
    cannonDome = new BaseBall(200,210,30);
  
    cannonGun=new Cannon(310,150,10,100,65);
    ball1 = new CannonBall(400,200,10);
    
 //   enemy=new EnemyFire(600,100,10,30); 

  
   

    
}

// Remember to update the Matter Engine and set the background.
function draw() {
   background(backgroundImg);
   Engine.update(engine);
   
   ground.display();
   platform.display();
   
   cannonBase1.display();
   cannonDome.display();
   //cannonBase2.display();

   cannonGun.display();
   ball1.display();

  
  
}


function keyReleased() {
    if(keycode==32)
       ball1= new Ball(World.mouseX,200,10)
}

function mouseReleased(){
   // slingshot.fly();
    gamestate = "launched";
}




