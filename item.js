function Item(_x, _y, _w, _h, _sizeScale, _deltaX, _deltaY, _name, _projectName, _year, _link, _tag, _id) {
  this.x = _x;
  this.y = _y;
  this.w = _w;
  this.h = _h;
  this.sizeScale = _sizeScale;
  this.deltaX = _deltaX;
  this.deltaY = _deltaY;
  this.name = _name;
  this.projectName = _projectName;
  this.yr = _year;
  this.link = _link;
  this.tag = _tag;
  this.id = _id;
  this.fillColor;
  this.textColor;
  this.isClicked;
  this.isOver;


  textColor = color(255, 255, 255);
  isClicked = false;
  isOver = false;

  if (this.tag == "EXAMPLES") {
    this.fillColor = color(0, 0, 0);
    //fillColor = color(103,155,59);
  } else if (this.tag == "SCIENCE") {
    this.fillColor = color(103, 155, 59);
  } else if (this.tag == "MOVIES") {
    this.fillColor = color(134, 86, 250);
  } else if (this.tag == "ART") {
    this.fillColor = color(4, 141, 178);
  } else if (this.tag == "EDUCATION") {
    this.fillColor = color(209, 119, 252);
  } else if (this.tag == "MEXICO") {
    this.fillColor = color(215, 81, 23);
  }

  this.draw = function() {
    noStroke();
    fill(this.fillColor);
    //rect(this.x + this.deltaX, this.y+this.deltaY, this.w * this.sizeScale, this.h * this.sizeScale);
    ellipse(this.x + this.deltaX, this.y + this.deltaY, this.w * this.sizeScale, this.h * this.sizeScale);
    fill(255);
    //ellipse(this.x + this.deltaX, this.y, this.w * this.sizeScale*0.9, this.h * this.sizeScale*0.9);
    //fill(this.fillColor);
    textAlign(CENTER, CENTER);
    textSize(this.w * this.sizeScale / 4);
    text(String(this.yr), this.x + this.deltaX, this.y + this.deltaY);

    if (isOver) {
      fill(this.fillColor);
      rect(this.x + this.deltaX, this.y + this.deltaY - this.w * this.sizeScale, this.w/10 * this.sizeScale, this.h * this.sizeScale);
      textSize(this.w * this.sizeScale / 3);
      text(String(this.name), this.x + this.deltaX, this.y + this.deltaY - this.w * this.sizeScale);
      textSize(this.w * this.sizeScale / 6);
      text(String(this.projectName), this.x + this.deltaX, this.y + this.deltaY - this.w * this.sizeScale);
    }



  }


  this.update = function(_sizeScale, _deltaX, _deltaY) {

    this.sizeScale = _sizeScale;
    this.deltaX = _deltaX;
    this.deltaY = _deltaY;
  }


  this.clicked = function() {
    isClicked = false;
    var d = dist(mouseX, mouseY, this.x + this.deltaX, this.y + this.deltaY);
    if (d < this.w * this.sizeScale / 2) {
      isClicked = true;
      window.open(String(this.link));
      //this.fillColor = color(255, 0, 200);
    }



  }

  this.over = function() {
    isOver = false;
    var d = dist(mouseX, mouseY, this.x + this.deltaX, this.y + this.deltaY);
    if (d < this.w * this.sizeScale / 2) {
      isOver = true;
      //this.fillColor = color(255, 0, 200);
    }



  }












}