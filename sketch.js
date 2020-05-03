var zenia,tourus,cyclap,zeniaDeform,tourusDeform,cyclapDeform,wall1,wall2,wall3,zeniaWeight,zeniaSpeed,tourusSpeed,tourusWeight,cyclapSpeed,cyclapWeight;

function setup() {
  createCanvas(1600,400);
  zenia = createSprite(100, 100, 50, 50);
  zenia.shapeColor = "white";
  zenia.velocityX = 10;
  zeniaSpeed = random(40,60);
  zeniaWeight = random(2160,2260);
  tourus = createSprite(100,200,50,50);
  tourus.shapeColor = "white";
  tourusSpeed = random(30,50);
  tourusWeight = random(1422,1522);
  tourus.velocityX = 10;
  cyclap = createSprite(100,300,50,50);
  cyclap.shapeColor = "white";
  cyclapSpeed = random(25,45);
  cyclapWeight = random(2900,3000);
  cyclap.velocityX = 10;
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

  if(zeniaDeform >= 80){

    zenia.shapeColor = "green";

  }

  if(zeniaDeform >= 120){

    zenia.shapeColor = "yellow";

  }

  if(zeniaDeform >= 180){

    zenia.shapeColor = "red";

  }

}

  if(tourus.x-wall2.x<=(tourus.width/2+wall2.width/2)&&wall2.x-tourus.x<=(tourus.width/2+wall2.width/2)){

    tourusDeform = 0.5*tourusWeight*tourusSpeed*tourusSpeed/22500;
    tourus.velocityX = 0;

  if(tourusDeform >= 80){

    tourus.shapeColor = "green";

  }

  if(tourusDeform >= 120){

    tourus.shapeColor = "yellow";

  }

  if(tourusDeform >= 180){

    tourus.shapeColor = "red";

  }
}


  if(cyclap.x-wall3.x<=(cyclap.width/2+wall3.width/2)&&wall3.x-cyclap.x<=(cyclap.width/2+wall3.width/2)){

    cyclapDeform = 0.5*cyclapWeight*cyclapSpeed*cyclapSpeed/22500;
    cyclap.velocityX = 0;

  if(cyclapDeform >= 80){

    cyclap.shapeColor = "green";

  }

  if(cyclapDeform >= 120){

    cyclap.shapeColor = "yellow";

  }

  if(cyclapDeform >= 180){

    cyclap.shapeColor = "red";

  }

}  

  drawSprites();

}
