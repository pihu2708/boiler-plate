const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground1 = new Ground(200,390,400,20)
  ground2 = new Ground(200,10,400,20)
  ground3 = new Ground(10,200,20,400)
  ground4 = new Ground(390,200,20,400)

  ball= new Ball (200,20,30)

  button = createImg("push.png")
  button.position(20,30)
  button.size(50,50)
  button.mouseClicked(function(){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.10,y:-0.05})
  })
}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("brown")
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ball.display()
}

