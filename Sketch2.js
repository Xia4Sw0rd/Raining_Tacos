var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leafImg,orange_leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orange_leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating the rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  
  //controls
  rabbit.x = World.mouseX;
  
 spawnApples();
 spawnLeaf();
  
  drawSprites();
}

function spawnApples(){
    if (frameCount % 80 == 0){
  var apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.03;
  apple.velocityY = 10; 
}
}
function spawnLeaf(){
  var leaves = createSprite(random(60,350),40,10,10);
  leaves.addImage(leafImg);
  leaves.addImage(orange_leafImg);
  leaves.scale = 0.03;
  leaves.velocityY = 5;

} 
  