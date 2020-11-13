const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   ball1 = new Paper(100,200); 
   rope1 = new Rope(ball1.body, {x:100,y:100} );
   ball2 = new Paper(150,200); 
   rope2 = new Rope(ball2.body, {x:150,y:100} );
   ball3 = new Paper(200,200); 
   rope3 = new Rope(ball3.body, {x:200,y:100} );
   ball4 = new Paper(250,200); 
   rope4 = new Rope(ball4.body, {x:250,y:100} );
   ball5 = new Paper(300,200); 
   rope5 = new Rope(ball5.body, {x:300,y:100} );
   ground = new Ground(200,100,400,40);


}

function draw(){
    background(255);
    Engine.update(engine);
    rope1.display();
    ball1.display();
    rope2.display();
    ball2.display();
    rope3.display();
    ball3.display();
    rope4.display();
    ball4.display();
    rope5.display();
    ball5.display();
    ground.display();
 

}
function mouseDragged()
{
   Matter.Body.setPosition(ball1.body, {x : mouseX,y : mouseY})
}