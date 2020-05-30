var block1,block2,ground,block4,block5,block6,block7,block8;

function setup() {
  createCanvas(1200,600);
 block1= createSprite(500, 300, 310, 210);
 block1.shapeColor="yellow";

 block2= createSprite(315, 285, 60, 240);
 block2.shapeColor="red";

 ground=createSprite(505,420,440,30);
 ground.shapeColor="green";

 block4=createSprite(690,285,70,240);
 block4.shapeColor="blue";

block5=createSprite(315,145,60,40);
block5.shapeColor="blue";

block6=createSprite(690,145,66,40);
block6.shapeColor="red";

block7=createSprite(500,135,50,120);
block7.shapeColor="green";

block8=createSprite(500,100,200,50);
block8.shapeColor="white";

}

function draw() {
text("The Magic Castle",490,90);

  background("pink");  
  drawSprites();
}