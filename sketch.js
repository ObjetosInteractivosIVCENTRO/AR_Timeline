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
var maxScale = 2.0;
var backgroundColor;
// JSON VARIABLES
var itemsJSON;
var items = [];
var itemsArt = [];
var itemsExamples = [];
var itemsMexico = [];
var itemsScience = [];
var itemsMovies = [];
var canvasW;
var generalCanvasX;
var focusX;
var distanceFocus;
var positionCanvasX;
var _isWheel;
var rangeW;

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
  focusX = 0.0;
  distanceFocus = 0.0;
  positionCanvasX = 0.0;
  _isWheel = false;
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
  //itemsJSON.data.length
  canvasW = itemsJSON.data.length * 200 * sizeScale;
  generalCanvasX = 0;
  for (var i = 0; i < itemsJSON.data.length; i++) {
    //var positionX = map(int(itemsJSON.data[i].year), -400, 2020, 0, 2020 * 3);

    items.push(new Item(200 * i, windowHeight/2, 100, 100, sizeScale, posX, posY,
      itemsJSON.data[i].name,
      itemsJSON.data[i].projectName,
      itemsJSON.data[i].year,
      itemsJSON.data[i].link,
      itemsJSON.data[i].tag,
      i));
  }


}

function updateItems() {

  canvasW = itemsJSON.data.length * 200 * sizeScale;

  generalCanvasX = (posX) * sizeScale;


  if (generalCanvasX > windowWidth / 2) {
    focusX = 0;
    distanceFocus = 0;
  } else {
    focusX = windowWidth / 2 + abs(generalCanvasX);
    distanceFocus = dist(generalCanvasX, 0, windowWidth / 2, 0);
  }


 // print("generalCanvasX: " + generalCanvasX);

  // print("positionCanvasX: " + positionCanvasX);
  //print("distanceFocus: " + distanceFocus);
  // print("canvasW: " + canvasW + " :: generalCanvasX: " + generalCanvasX + " :: focusX:" + focusX);

  positionCanvasX = map(distanceFocus, 0, canvasW, 0, 100);

  if (positionCanvasX < 0.0) {
    positionCanvasX = 0.0
  } else if (positionCanvasX > 100.0) {
    positionCanvasX = 100.0
  }

  // rangeW = (positionCanvasX * canvasW) / 100.0;
}

function drawItems() {
  background(backgroundColor);


  for (var i = 0; i < items.length; i++) {
    items[i].update(sizeScale, posX, posY);
    items[i].draw();

    //print(items[i].name);
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


  //var delta = event.delta;
  //posX += (delta) * (-10);


  /*
    //positionCanvasX
    //canvasW
    var newCanvasW = itemsJSON.data.length * 200 * sizeScale;
    rangeW = (positionCanvasX / 100.0)* (newCanvasW);
    print("rangeW :: " + rangeW);

    if (rangeW < windowWidth / 2) {
      posX = rangeW - (windowWidth / 2);
    } else {

      posX = (rangeW - (windowWidth / 2)) * (-1);
    }
    //posX = 0;
  */
  return false;
}

function centerCanvasForScaleAndPosition(_scale, _position) {
  sizeScale = _scale;
  var newCanvasW = itemsJSON.data.length * 200 * _scale;
  rangeW = (_position / 100.0) * (newCanvasW);
  //print("newCanvasW :: " + newCanvasW);
  //print("rangeW :: " + rangeW);
  //print("windowWidth/2 :: " + windowWidth / 2);
  if (rangeW < (windowWidth / 2)) {
    posX = rangeW - (windowWidth / 2);
  } else {

    posX = (rangeW - (windowWidth / 2)) * (-1);
  }
  print("posX :: " + posX);

  for (var i = 0; i < items.length; i++) {
    items[i].update(sizeScale, posX, posY);
    // items[i].draw();

    //print(items[i].name);
  }
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
  //centerCanvasForScaleAndPosition(0.1,100);
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
  posX += (mouseX - pmouseX) * (1 / sizeScale);
  //posX += (mouseX - pmouseX);
  posY += (mouseY - pmouseY);
  //print("DELTA:" + (pmouseX - mouseX));

  // prevent default
  //return false;
  updateItems();
}