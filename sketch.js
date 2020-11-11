const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(600,width/2,800,20);

  

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
 ground.display();
  
  
  drawSprites();
}