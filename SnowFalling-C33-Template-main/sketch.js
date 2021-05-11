var ground, snowflakes;
var groundImg, snowflakesImg;

function setup() {
  createCanvas(1280,720);
  ground = createSprite(640, 460, 10, 10);
  ground.addImage(groundImg);
  ground.scale = 2.5;

}

function preload(){
  groundImg = loadImage("snow1.jpg");
  snowflakesImg = loadImage("Snow.png");
}

function draw() {
  background(0);  

  if(frameCount%20 === 0)
  {
    snowflakes = createSprite(random(width/2-640,width/2+640),10,10)
    snowflakes.addImage(snowflakesImg);
    snowflakes.scale = 0.05;
    snowflakes.velocityY = 10;
  }

  drawSprites();
}
