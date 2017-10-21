/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

// POSITION VARIABLES
var posX = 0;
var posY = 0;
var sizeScale = 1;
var minSacale = 0.05;
var maxScale = 3.5;
var backgroundColor;
// JSON VARIABLES
var itemsJSON;
var items = [];
var itemsArt = [];
var itemsExamples = [];
var itemsMexico = [];
var itemsScience = [];
var itemsMovies = [];


/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {
  itemsJSON = loadJSON("assets/data/data.json");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  initializeJSON();
  initialize();
  initializeItems();
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
  //backgroundColor = color(255, 204, 0);
  backgroundColor = color(255);
  sizeScale = 1.0;

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

function initializeItems() {

  for (var i = 0; i < 5; i++) {
    var positionX = map(int(itemsJSON.data[i].year), -400, 2020, 0, 2020*3);
    
    items.push(new Item(300*i, 150, 150, 150, sizeScale, posX,posY,
      itemsJSON.data[i].name,
      itemsJSON.data[i].projectName,
      itemsJSON.data[i].year,
      itemsJSON.data[i].link,
      itemsJSON.data[i].tag,
      i));
  }


}

function updateItems() {


}

function drawItems() {
  background(backgroundColor);

  for (var i = 0; i < items.length; i++) {
    items[i].update(sizeScale, posX,posY);
    items[i].draw();

    // print(items[i].name);
  }

}




/*
 *****************************************
 *****************************************
 * JSON METHODS
 *****************************************
 *****************************************
 */

function initializeJSON() {


  //print(itemsJSON.data[5].name);

}



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
  if (sizeScale < minSacale) {
    sizeScale = minSacale;
  } else if (sizeScale > maxScale) {
    sizeScale = maxScale;
  } else {
    sizeScale += event.delta * 0.01;
  }


  return false;
}


function mousePressed() {
  //window.open("https://www.w3schools.com");
  for (var i = 0; i < items.length; i++) {
    items[i].clicked();
    // print(items[i].name);
  }

}


function mouseReleased() {
  //window.open("https://www.w3schools.com");
  for (var i = 0; i < items.length; i++) {
    items[i].released();
 
  }

}

function mouseMoved() {
  //window.open("https://www.w3schools.com");
  for (var i = 0; i < items.length; i++) {
    items[i].over();
    // print(items[i].name);
  }

}

function mouseDragged() {

  //print("PREV:" + pmouseX);
  //print("CURR:" + mouseX);
  //posX += (mouseX - pmouseX)*(1/sizeScale);
  posX += (mouseX - pmouseX);
  posY += (mouseY - pmouseY);
  //print("DELTA:" + (pmouseX - mouseX));

  // prevent default
  //return false;
}