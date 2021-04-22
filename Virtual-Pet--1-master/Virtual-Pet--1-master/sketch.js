var dog, happyDog, foodS, foodStock;

function preload()
{
	this.Image = loadImage("doglmg.png");
  this.Image = loadImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  foodStock = database.ref('food');
  foodStock.on("value",readstock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}


  drawSprites();

  textSize(15);
  Fill("black");
  stroke();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    
  })
}



