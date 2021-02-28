var Balloon,Balloonimg, database,height;
var backimg,database;

function preload(){

  back=loadImage("Hot Air Ballon-01.png");
  Balloonimg1=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");

}

function setup() {
  createCanvas(1500,800);
  database = firebase.database();
  // console.log(database)
  
  Balloon = createSprite(300,550,10,10);
  Balloon.addAnimation("Hot Air Balloon",Balloonimg1);
  Balloon.scale = 0.5

  // var BalloonPosition = database.ref('balloon/height');
  // BalloonPosition.on("value", readHeight, showError);

}

function draw() {

  background(back);

  if(keyDown(LEFT_ARROW)){
   Balloon.x=Balloon.x-10;
    // updateHeight(-10,0);
    // Balloon.addAnimation("hotAirBalloon",Balloonimg1);
  }
  else if(keyDown(RIGHT_ARROW)){
    Balloon.x=Balloon.x+10;
    // updateHeight(10,0);
    // Balloon.addAnimation("hotAirBalloon",Balloonimg1);
  }
  else if(keyDown(UP_ARROW)){
    Balloon.y=Balloon.y-10;
    // updateHeight(0,-10);
    // Balloon.addAnimation("hotAirBalloon",Balloonimg1);
     Balloon.scale=Balloon.scale -0.005;
  }
  else if(keyDown(DOWN_ARROW)){
    Balloon.y=Balloon.y+10;
    // updateHeight(0,+10);
    // Balloon.addAnimation("hotAirBalloon",Balloonimg1);
     Balloon.scale=Balloon.scale+0.005;
  }

  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);

  
  drawSprites();
}

// function updateHeight(x,y){
//   database.ref('balloon/height').set({
//     'x': height.x + x ,
//     'y': height.y + y
//   })
// }

function readHeight(data){
  //height=data.val();
Balloon.x=height.x;
Balloon.y=height.y;
}   

function showError(){
  console.log("Error in writing to the database");
}