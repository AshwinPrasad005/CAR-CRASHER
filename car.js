class car{

    constructor(weight,speed){

    this.x = 100;
    this.y = 50;
    this.sprite = createSprite(this.x,this.y,50,50);
    this.speed = speed;
    this.weight = weight;
    this.sprite.velocityX = this.speed;
    this.sprite.shapeColor = "white"; 

    }

}