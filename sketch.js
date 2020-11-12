var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 100);
  wall = createSprite(600, 450, 60, 800);
  
  speed = random(50,100);
  weight = random(400, 1500);
 
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

  if (wall.x-car.x<(car.width/2 + wall.width/2)){
    car.velocityX = 0;
    car.collide(wall);
    var deformation =( 0.5*weight*speed*speed)/22500;
    if(deformation<100){
      textSize(30)
      text("small ",100, 50);
      car.shapeColor = ("green");
    }
    if(deformation>100 && deformation<180){
      textSize(30)
      text("moderate ",100, 50);
      car.shapeColor = ("blue");
    }
    if(deformation>180){
      car.shapeColor = ("red");
      textSize(30)
      text("bad ",100, 50);
    }
  }

  drawSprites();
 
}