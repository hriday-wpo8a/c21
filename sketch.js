var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  gameobject1 = createSprite(100, 100, 50, 50);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(300,100,50,50);
  gameobject2.shapeColor = "green"
  gameobject3 = createSprite(500,100,50,50);
  gameobject4 = createSprite(700,100,50,50);
  gameobject3.shapeColor = "green"
  gameobject4.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(gameobject1,movingRect)===true){
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2){ 
if (object1.x - object2.x < object1.width/2 + object2.width/2
  &&object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object1.height/2 + object2.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true ;
  }
else {return false}
}