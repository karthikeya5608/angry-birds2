var array=[1,2,3];
console.log(array[1]);
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,platform;
var state = "true";
var gamestate="attached";
function preload()
{
    bg1=loadImage("sprites/bg.png");    
}

function setup()
{
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    platform= new Ground(150,305,300,170);
    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    bird2 = new Bird(120,55);

    chain = new Slingshot(bird.body,{x:200,y:50});
}

function draw(){
    background(bg1);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    platform.display();

    bird.display();
    bird2.display();
    chain.display();
}

function mouseDragged() 
{
    if(gamestate==="attached")
 {
       Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
 }   
    if(gamestate==="attached")
 {
       Matter.Body.setPosition(bird2.body,{x:mouseX,y:mouseY});   
 }
}

function mouseReleased() 
{
    chain.fly();
}

function keyPressed() {
    if (keyCode===32&&state==="true")
    {
        chain.attach(bird.body);
        state="false";
        gamestate1="launched"
    }

    if (keyCode===32&&state==="false")
    {
        chain.attach(bird2.body);
        state="true";
        gamestate="launched";
    }    
}