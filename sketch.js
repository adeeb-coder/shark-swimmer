var water,water_img;
var shark,shark_img;
var fish,fish_img,fishGroup;
var arrow,arrow_img,arrowGroup;
var score;
var gamestate="PLAY"



function preload(){
  water_img=loadImage("water.jpg");  
  fish_img=loadImage("fish.png");
  shark_img=loadImage("shark.jpeg");
  arrow_img=loadImage("arrow.png");
  
  
}


function setup() {
 createCanvas(700,500);
  
  water=createSprite(600,400);
  water.addImage(water_img);
  water.velocityX=-2;
  
  
  shark=createSprite(100,250);
  shark.addImage(shark_img);
  shark.velocityX=0;
  shark.scale=0.5;
  
  
  fishGroup=new Group();
    arrowGroup=new Group();
  
  shark.setCollider("rectangle",-60,0)
  shark.debug=false;
  
  
  score=0;
  
}

function draw() {
  
  if(gamestate==="PLAY") {
    
  
  if(water.x < 0) {
   water.x=water.width/2
  }
  
  if(fishGroup.isTouching(shark)) {
   fishGroup.destroyEach();
    score=score+2;
  }
  
  
  if(keyDown("up_arrow")) {
    shark.velocityY=-2;
  }
  
  if(keyDown("down_arrow")) {
   shark.velocityY=2; 
  }
  spawnfish();
  
    if(arrowGroup.isTouching(shark)) {
     arrowGroup.destroyEach();
      
      gamestate="END"
      
    }
  
  
 drawSprites();
  
  stroke("black");
  textSize(20);
  fill("white");
  text("score:"+score,300,70);
    
    if(gamestate==="END") {
     background(0);
      stroke("blue");
      fill("red");
      textSize(40);
      text("GAME OVER",250,250);
      
    }
  
  }
}


function spawnfish() {
 if(frameCount % 450 === 0) {
  fish=createSprite(500,100);
  fish.y=Math.round(random(15,302));
   fish.addImage(fish_img);
   fish.velocityX=-1.5;
   fish.scale=0.3;
   fishGroup.add(fish);
   
  
    arrow=createSprite(450,150);
     arrow.addImage(arrow_img);
     arrow.velocityX=-2;
     arrow.scale=0.4;
     arrowGroup.add(arrow);
 
    
 }
  
  
}



