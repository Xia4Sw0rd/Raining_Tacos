var boy,boyImg,boy2,boyImg2;
var taco,tacoImg;
var bomb, bombImg;
var city,cityImg;
var canvas;
var score=0;




function preload(){
   // boy = loadImage("Images/boy.png");
    boyImg = loadImage("Images/boy.png");
   // taco = loadImage ("Images/Taco.jpg");
   // city = loadImage ("sprite_10.png");
    cityImg = loadAnimation("sprite_10.png");

    bomb = loadImage("Images/bomb-png-46607.png");

}



function setup(){
   
  canvas = createCanvas(windowWidth,windowHeight);

     
      // Moving background
      city = createSprite(600,200);
      city.addImage(cityImg);
      city.scale = 1.3;
     
   
      
      //creating the boy
      boy = createSprite(180,340,30,30);
      boy.addAnimation("boy.png",boyImg);
      boy.scale =0.90;


    //  taco.scale = 0.50;
    //  bomb.scale = 0.50;
      


    
   
}



function draw() {
    background("black");
    
    edges = createEdgeSprites();
    boy.collide(edges);
    
    //controls (will change to directional keys)
    if(keyDown("left")){
      boy.x = boy.x-7;
     }  
     if(keyDown("right")){
      boy.x = boy.x+7; 
     } 
    if(spawnTacos.isTouching(boy)){
      score = score +1;
    }
  
   spawnTacos();
   spawnBombs();

   drawSprites();
  }

function windowResized(){
    resizedCanvas = (windowWidth,windowHeight);
}


// Will Change later
function spawnBombs(){
    if (frameCount % 80 == 0){
  var bomb = createSprite(random(windowWidth,windowHeight),40,10,10);
  bomb.addAnimation(bombImg,"bomb-png-46607.png");
 // taco.scale = 0.03;
  bomb.velocityY = 5; 
}
}
function spawnTacos(){
  var taco = createSprite(random(windowWidth,windowHeight),40,10,10);
  taco.addAnimation(tacoImg,"Taco.jpg");
 // bomb.scale = 0.03;
  taco.velocityY = 5;
} 
