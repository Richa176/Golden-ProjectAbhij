var bgImg;
var cat1, catAni;
var dog1, dogAni;
var shopkeeper,shopkeeperImage;
// var beginX = 1300.0; // Initial x-coordinate
// var beginY = 300.0; // Initial y-coordinate
// var endX = 1300.0; // Final x-coordinate
// var endY = 300.0; // Final y-coordinate
// var distX; // X-axis distance to move
// var distY; // Y-axis distance to move
// var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
// var step = 0.01; // Size of each step along the path
// var pct = 0.0; // Percentage traveled (0.0 to 1.0)
var edges;
var ct = 1;
var gameState = "start";


function preload(){
  bgImg=loadImage("Pet_Shop_2020.png")
  catAni=loadAnimation("Cat_1.png","Cat_2.png")
  shopkeeperImage=loadAnimation("Png/Shopkeeper.png");
  shopkeeperImage1=loadAnimation("Png/Shopkeeper.png","Png/Shopkeeper2.png","Png/Shopkeeper3.png", "Png/Shopkeeper4.png", "Png/Shopkeeper5.png");
  dogAni=loadAnimation("Png/dog_1.png","Png/dog_2.png")
  c1Img=loadImage("Png/c1.png");
  c1Img2=loadImage("Png/c1walk.png");
  c2Img=loadAnimation("Png/c2st.png");
  c2Img2=loadAnimation("Png/c2w1.png");//,"Png/c2w2.png"
  //c2Img3=loadImage("Png/c2w2.png");
}

function setup() {
  createCanvas(1500,800);
  cat1=createSprite(180,580, 60, 30);
  cat1.addAnimation("running",catAni);
  cat1.scale=0.5;

  dog1=createSprite(420,520,60,30)
  dog1.addAnimation("running",dogAni);
  dog1.scale=0.5;

  shopkeeper=createSprite(600,500,10,10);
  shopkeeper.addAnimation("walking",shopkeeperImage);
  shopkeeper.scale=1.5;

  customer1=createSprite(800,200,10,10);
  customer1.addAnimation("Cwalking",c1Img);
  customer1.scale=.35;
  customer1.visible=false;
  //customer1.setVelocity(-5,4);
  //customer1.velocityY=4;

  customer2=createSprite(700,250,10,10);
  customer2.addAnimation("C2walking",c2Img);
  customer2.scale=.5;
  customer2.visible=false;
 
  
}

function draw() {
  background(bgImg); 
  
 
if (keyDown ("space")){
  gameState="play";
}

if (gameState==="play"){
  
  //if (frameCount % 50 == 0) {
   // var ct=Math.round(random(1,2));
   
    switch(ct)
    {
      case 1: 
        customer1.visible=true;
        customer1.setVelocity(-5,4);
        //ct++;
        break;

      case 2:
        customer2.visible=true;
        customer2.setVelocity(-3,2);
        //ct++;
        break;
      
      //default: break;
    }
 // }
    if(customer1.isTouching(cat1)){
      ct++;
      customer1.setVelocity(5,-3);
      customer1.addAnimation("Cwalking",c1Img2);
      cat1.visible=false;
    }
   else if(customer2.isTouching(dog1)){
      ct++;
      customer2.setVelocity(3,-4);
      customer2.addAnimation("C2walking",c2Img2);
      dog1.visible=false;
    }
    if (customer1.y<=300){
      customer1.visible=false;
     
    }
    if (customer2.y<250){
      customer2.visible=false;
     // ct++;
    }
}

  
  shopkeeper.x=mouseX;
  shopkeeper.y=mouseY;

  edges= createEdgeSprites();
  shopkeeper.collide(edges);


  drawSprites();
}

function mouseMoved(){
shopkeeper.addAnimation("walking",shopkeeperImage1);
}
//   pct = 0.0;
//   beginX = x;
//   beginY = y;
//   endX = mouseX;
//   endY = mouseY;
//   distX = endX - beginX;
//   distY = endY - beginY;
//  if(shopkeeper.x<mouseX){
//  shopkeeper.mirrorX(shopkeeper.mirrorX() * -1);
//  }
//  else{
//    shopkeeper.mirrorX(shopkeeper.mirrorX() * +1);
//  }


  
 
//  }