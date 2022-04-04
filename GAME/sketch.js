var form;
var formbackground, level1, level1sprite;

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  formbackground=loadImage("./assets/form background.jpg");
  level1=loadImage("./assets/level1.png");

  level1sprite=createSprite(windowWidth,windowHeight);
  level1sprite.visible=false;

  form = new Form();

}

function draw() {
  background(formbackground);  

  start();

  drawSprites();

  form.display();
  


}


function windowResized() {

 resizeCanvas(windowWidth,windowHeight);

}

function start() {
form.handleMousePressed();
//background.changeImage(level1);
level1sprite.addImage("img",level1);
level1sprite.scale=6;
level1sprite.visible=true;
}
