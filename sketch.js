/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */


var pos = 25;
var sizeScale = 1;
var minSacale = 0.2;
var maxScale = 3.5;
var backgroundColor;
/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
  initialize();
}

function draw() {

  drawItems();
}


/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {
backgroundColor = color(255, 204, 0);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



/*
 *****************************************
 *****************************************
 * DRAW ITEMS METHODS
 *****************************************
 *****************************************
 */


function drawItems() {
  background(backgroundColor);
  fill(0);
  rect(pos, 25, 50*sizeScale, 50*sizeScale);

}




/*
 *****************************************
 *****************************************
 * JSON METHODS
 *****************************************
 *****************************************
 */


/*
 *****************************************
 *****************************************
 * MOUSE INTERACTION METHODS
 *****************************************
 *****************************************
 */

function mouseWheel(event) {
  //print(event.delta);
  
  
  //move the square according to the vertical scroll amount
  //pos += event.delta;
  //uncomment to block page scrolling
  if(sizeScale < minSacale){
    sizeScale = minSacale;
  }else if(sizeScale > maxScale){
    sizeScale = maxScale;
  }else{
      sizeScale += event.delta*0.01;
  }
  

  
  return false;
}


function mousePressed() {
  //window.open("https://www.w3schools.com");


}

function mouseReleased() {
  //window.open("https://www.w3schools.com");


}

function mouseDragged() {

//print("PREV:" + pmouseX);
//print("CURR:" + mouseX);
pos += (mouseX - pmouseX);
print("DELTA:" + (pmouseX - mouseX));

  // prevent default
  //return false;
}