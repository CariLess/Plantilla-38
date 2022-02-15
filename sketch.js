var a,b,c,d;
var pc;

function setup(){
createCanvas (600,600);
a = createSprite(-150,10,20,200);
b = createSprite(120,80,20,450);
c = createSprite(150,200,400,20);
d = createSprite(100,-80,500,20);


//declara un sprite para tu personaje

}

function draw(){
background("white");
if(keyDown(RIGHT_ARROW)){
  pc.x+=2;
}

drawSprites();

}