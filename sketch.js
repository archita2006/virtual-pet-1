//Create variables here
var dog,happyDog,database,foodS,foodStock,dog_IMG,happyDog_IMG,
 function preload() {
//   load images here
    dog_IMG=loadImage("../images/dogImg.png")
happyDog_IMG=loadImage("../images/dogImg1.png")
 }

function setup() {
	createCanvas(500, 500);
  dog=createSprite(width/2, 80, 10,10);
	dog.addImage(dog_IMG);
  dog.scale=0.2
  
  happyDog=createSprite(width/2, 80, 10,10);
	happyDog.addImage(happyDog_IMG);
  happyDog.scale=0.2
  database = firebase.database
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 happyDog.addImage(happyDog_IMG);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}



