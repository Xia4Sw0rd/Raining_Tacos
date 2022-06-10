var boy,boyImg,boy2,boyImg2;
var taco,tacoImg,burger,nachos;
var bomb, bombImg;
var treasure,redCrystal,purpleDiamond,greenDiamond,lightning,redStar,candy,bluestar,crown;
var heart;



function preload(){
    boy = loadImage("Images/boy.png");
    taco = loadImage ("Images/Taco.jpg");
    burger = loadImage ("Images/burger.jpg");
    nachos = loadImage ("Images/Nachos.jpg");
  //  heart = loadImage();
}



function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
     
      // Moving background
     
      
      //creating the rabbit
      boy= createSprite(180,340,30,30);
  //    boy.scale =0.09;
   //   boy.addImage(boyImg);
}



function draw() {
    background(20,22,1);
    
    edges = createEdgeSprites();
    boy.collide(edges);
    
    //controls (will change to directional keys)
    boy.x = World.mouseX;
    
   spawnTacos();
   spawnBombs();
    
    drawSprites();
  }

function windowResized(){
    resizedCanvas = (windowWidth,windowHeight);
}


// Will Change later
function spawnTacos(){
    if (frameCount % 80 == 0){
  var taco = createSprite(random(50,350),40,10,10);
  //taco.addImage(tacoImg);
 // taco.scale = 0.03;
  taco.velocityY = 10; 
}
}
function spawnBombs(){
  var bomb = createSprite(random(60,350),40,10,10);
//  bomb.addImage(bombImg);
 // bomb.scale = 0.03;
  bomb.velocityY = 5;

} 