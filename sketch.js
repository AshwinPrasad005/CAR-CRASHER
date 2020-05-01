var zenia,tourus,cyclap,zeniaDeform,tourusDeform,cyclapDeform,wall1,wall2,wall3,zeniaWeight,zeniaSpeed;

function setup() {
  createCanvas(1600,400);
  zenia = createSprite(100, 100, 50, 50);
  zenia.shapeColor = "white";
  zenia.velocityX = 10;
  zenia.debug = true;
  zeniaSpeed = 60;
  zeniaWeight = 2260;
  tourus = createSprite(100,200,50,50);
  tourus.shapeColor = "white";
  cyclap = createSprite(100,300,50,50);
  cyclap.shapeColor = "white";
  wall1 = createSprite(1200,100,30,75);
  wall1.shapeColor = "black";
  wall2 = createSprite(1200,200,30,75);
  wall2.shapeColor = "black";
  wall3 = createSprite(1200,300,30,75);
  wall3.shapeColor = "black";
}

function draw() {
  background(80,80,80); 
  
  if(zenia.x-wall1.x<=(zenia.width/2+wall1.width/2)&&wall1.x-zenia.x<=(zenia.width/2+wall1.width/2)){

    zeniaDeform = 0.5*zeniaWeight*zeniaSpeed*zeniaSpeed/22500;
    zenia.velocityX = 0;

  }

  if(zeniaDeform >= 80){

    zenia.shapeColor = "green";

  }

  if(zeniaDeform >= 120){

    zenia.shapeColor = "yellow";

  }

  if(zeniaDeform >= 180){

    zenia.shapeColor = "red";

  }

  drawSprites();
}