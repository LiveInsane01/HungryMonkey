var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score 

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
 background("pink");
  
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime,100,50);
    monkey.collide(ground);
  
  
    if(keyDown("space")&& monkey.y >= 80) {
        monkey.velocityY = -12;
    }
  
      monkey.velocityY = monkey.velocityY + 0.8;
  
      if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  
if(obstacleGroup.isTouching(monkey)){ 
  ground.velocityX = 0;
  monkey.velocityY = 0; 
  obstacleGroup.setVelocityXEach(0);
  obstacleGroup.setVelocityYEach(0);
  FoodGroup.setVelocityXEach(0);
  FoodGroup.setVelocityYEach(0);
  obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1); 
   survivalTime = 0;
  
frameCount = 100;
}
  
  monkey.setCollider("rectangle",10,250,monkey.width,monkey.height);
  //monkey.debug = true;
  food();
  obstacle();
  
  drawSprites();
  
}

function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(400,100,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
    banana.lifetime = 100;
    
    FoodGroup.add(banana);
  }
}

function obstacle(){
  
  if(frameCount % 300 === 0){
   var obstacle = createSprite(400,290,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.3;
   obstacle.velocityX = -4; 
   obstacle.lifetime = 100; 
    
   obstacleGroup.add(obstacle); 
  }
}






