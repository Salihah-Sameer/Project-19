// create variables:
var rocket , rocketImg;
var alien_1, alien_1Img;
var alien_2, alien_2Img;
var ufo, ufoImg;
var background, backgroundImg;
var alien_1s, alien_2s, ufos;
var star, star_Img;
var stars;

var PLAY=1;
var END=0;
var gameState= PLAY;

function preload (){

// load images:
rocketImg = loadImage("rocket-png.png");
alien_1Img = loadImage("alien_1.png");
alien_2Img = loadImage("alien_2.png");
backgroundImg = loadImage("background.jpg");
ufoImg = loadImage("ufo.png");
star_Img = loadImage("star.png");
}

function setup() {

// background and canavas:
    createCanvas(windowWidth,windowHeight);
    
    
    background.x = background.width/2;

// add rocket:
    rocket= createSprite(50,180,120,50);
    rocket.addImage(rocketImg);
    rocket.scale= 1;

// group obstacles:
    alien_1s=new Group();
    alien_2s=new Group();
    ufos=new Group()
    stars = new Group();

}

function draw() {

 if(gameState===PLAY){
    background(0);
    rocket.position.x = World.mouseX;
    edges= createEdgeSprites();
    rocket.collide(edges);

    if(backround.x > height ){
        backround.x = height/4;
     }
       
         
         createUFO();
         createAlien_1();
         createAlien_2();
         createStar();
     
         if (stars.isTouching(rocket)) {
           stars.destroyEach();
           starDust=starDust + 5;
         }
         else if (alien_1s.isTouching(rocket)) {
           alien_1s.destroyEach();
           starDust=starDust - 3;
           
         }else if(alien_2s.isTouching(rocket)) {
           alien_2s.destroyEach();
           starDust=starDust - 2;
           
         }else{
           if(ufos.isTouching(rocket)) {
             gameState=END;
             
             
             
             stars.destroyEach();
             ufos.destroyEach();
             alien_2s.destroyEach();
             alien_1s.destroyEach();
             
             stars.setVelocityYEach(0);
             ufos.setVelocityYEach(0);
             alien_1s.setVelocityYEach(0);
             alien_2s.setVelocityYEach(0);
          
         }
 }
 drawSprites();
 textSize(20);
 fill(255);
 text("Star Dust:" + starDust,width-150,30);
  
 }
}

function createUFO() {
  if (World.frameCount % 200 == 0) {
  var ufo = createSprite(Math.round(random(50, width-50),40, 10, 10));
  ufo.addImage(ufoImg);
  ufo.scale=0.12;
  ufo.velocityY = 5;
  ufo.lifetime = 200;
  ufos.add(cash);
  }
}

function createAlien_1() {
  if (World.frameCount % 320 == 0) {
  var alien_1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  alien_1.addImage(diamondsImg);
  alien_1.scale=0.03;
  alien_1.velocityY = 5;
  alien_1.lifetime = 200;
  alien_1s.add(diamonds);
}
}

function createAlien_2() {
  if (World.frameCount % 410 == 0) {
  var alien_2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  alien_2.addImage(jwelleryImg);
  alien_2.scale=0.13;
  alien_2.velocityY = 5;
  alien_2.lifetime = 200;
  alien_2s.add(jwellery);
  }
}

function createStar (){
  if (World.frameCount % 530 == 0) {
  var star = createSprite(Math.round(random(50, width-50),40, 10, 10));
  star.addImage(swordImg);
  star.scale=0.1;
  star.velocityY = 4;
  star.lifetime = 200;
  stars.add(star);
  }
}

