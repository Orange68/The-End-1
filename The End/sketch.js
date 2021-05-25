const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, rex, box2, box3;


function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(1200,800,3000,40);
    rex = new Cloud(1200,400,100,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    rex.display();
}