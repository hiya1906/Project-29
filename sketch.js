const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,slingshot,polygon,pImage;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function preload(){
    pImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(650,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(325,395,650,10);
    fill("yellow");
    polygon = Bodies.rectangle(140,220,22.5,22.5,{resitution:0.4,density:0.6})
    World.add(world,polygon);
    slingshot = new SlingShot(polygon,{x:100,y:200});

    //level one
    block1 = new Block(300,365,30,40);
    block2 = new Block(350,365,30,40);
    block3 = new Block(400,365,30,40);
    block4 = new Block(450,365,30,40);
    block5 = new Block(500,365,30,40);
    block6 = new Block(550,365,30,40);
    block7 = new Block(600,365,30,40);
    //level two
    block8 = new Block(350,315,30,40); 
    block9 = new Block(400,315,30,40); 
    block10 = new Block(450,315,30,40); 
    block11 = new Block(500,315,30,40); 
    block12 = new Block(550,315,30,40); 
    //level three 
    block13 = new Block(400,265,30,40); 
    block14 = new Block(450,265,30,40); 
    block15 = new Block(500,265,30,40);
    //top 
    block16 = new Block(450,215,30,40); 

}

function draw(){
    background("black")
    //mouseDragged();
    //mouseReleased();
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();

    imageMode(CENTER);
    image(pImage,polygon.position.x,polygon.position.y,45,45);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
   //gameState = "launched";
}