var bullet, wall;
var speed, weight,thickness;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  
  bullet = createSprite(50, 200, 100, 10);
  bullet.shapeColor="White";

  wall = createSprite(1200,200,thickness,120);
  wall.shapeColor=color(80,80,80);

  
 

  bullet.velocityX = speed;
}



function draw() {
  background(0,0,0); 
  
if (E(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5 * weight *speed * speed  / (thickness * thickness * thickness);
  if(damage<10){
    wall.shapeColor="Green";
  }

  if(damage>10){
    wall.shapeColor="Red";
  }
}
  
   

 
  drawSprites();
}