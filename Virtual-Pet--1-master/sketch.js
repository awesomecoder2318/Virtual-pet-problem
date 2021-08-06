var dog, happydog, foodA, foodStock
var dogimg, happydogimg, database
function preload()
{
  dogimg = loadImage("images/dogImg.png")
  happydogimg = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10)
  dog.addImage(dogimg)
  dog.scale = 0.5
  foodStock = database.ref('Food');
  foodStock.on('value', readStock);
}


function draw() {  
background(46,139,87)
textSize(15)
fill("black")
text("NOTE: press the UP ARROW to feed your dog treats!!!",30,30)
text(foodStock,10,450)
if(keyWentDown(UP_ARROW)){
writeStock(foodA)
dog.addImage(happydogimg)
}
  drawSprites();
  //add styles here

}


function readStock(data){
foodA = data.val()
}
function writeStock(x){

if(x<=0){
x=0
}
else{
x = x-1
}

database.ref('/').update({
  Food:x
})

}
