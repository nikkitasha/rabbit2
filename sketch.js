var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaves, leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  SpawnApples();
  spawnleaves();
  drawSprites();
}
function SpawnApples(){
  if(frameCount % 60===0){
  apple = createSprite(400,120,40,10);
  apple.x = Math.round(80,120);
  apple.addImage(appleImg);
  apple.scale= 0.07;
  apple.velocityY= 4
  apple.lifetime=200
  }
  
}
function spawnleaves(){
  if(frameCount % 60===0){
  leaves = createSprite(140,120,40,10);
  leaves.x = Math.round(80,300);
  leaves.addImage(leavesImg);
  leaves.scale = 0.07;
  leaves.velocityY =3
  leaves.lifetime= 200
  }
}