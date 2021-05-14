const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var rect1 , rect2 , rect3 ;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)

    rect1 = new rect(400,300,20,30);
    rect2 = new rect(400,200,20,30);
    rect3 = new rect(400,100,20,30);

    rect1.fill("red");
    rect2.fill("red");
    rect3.fill("red");
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    rect1.display();
    rect2.display();
    rect3.display();
}