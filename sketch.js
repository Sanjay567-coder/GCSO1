var car1,car2,car3;
var wall1,wall2,wall3;
var speed,weight

function setup() {
  createCanvas(1400,600);

  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50, 100, 20, 20);
  car1.shapeColor = "white";
  car1.velocityX = speed;

  car2 = createSprite(50, 300, 20, 20);
  car2.shapeColor = "white";
  car2.velocityX = speed;

  car3 = createSprite(50, 500, 20, 20);
  car3.shapeColor = "white";
  car3.velocityX = speed;


  wall1 = createSprite(1100,100,20,100);
  wall1.shapeColor = color("grey");

  wall2 = createSprite(1100,300,20,100);
  wall2.shapeColor = color("grey");

  wall3 = createSprite(1100,500,20,100);
  wall3.shapeColor = color("grey");

}

function draw() {
  background("black");  

  if (wall1.x-car1.x <(car1.width + wall1.width)/2
  && wall2.x-car2.x <(car2.width + wall2.width)/2
  && wall3.x-car3.x <(car3.width + wall3.width)/2)
  {
    car1.velocityX=0;
    car2.velocityX=0;
    car3.velocityX=0;
    var deformation=0.5 * weight * speed * speed / 22500;
    if (deformation>180) {
      car1.shapeColor=color(225,0,0);
      car2.shapeColor=color(225,0,0);
      car3.shapeColor=color(225,0,0);
    }

    if (deformation<180 && deformation>100) {
      car1.shapeColor=color(230,230,0);
      car2.shapeColor=color(230,230,0);
      car3.shapeColor=color(230,230,0);
    }

    if (deformation<100) {
      car1.shapeColor=color(0,225,0);
      car2.shapeColor=color(0,225,0);
      car3.shapeColor=color(0,225,0);
    }
    
  }
  drawSprites();
}