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
  this.originalPosition;
  this.currentX;
  this.currentY;

  this.textColor = color(255, 255, 255);
  this.isClicked = false;
  this.isOver = false;
  this.isShowTag = false;
  this.deltaTagY = 0;

  this.originalPosition = this.x;

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



    if (this.isShowTag) {

      if (this.tag == "EXAMPLES") {
        this.deltaTagY = this.w * this.sizeScale * 0.0;
      } else if (this.tag == "SCIENCE") {
        this.deltaTagY = -this.w * this.sizeScale * 2.0;
      } else if (this.tag == "MOVIES") {
        this.deltaTagY = -this.w * this.sizeScale * 4.0;
      } else if (this.tag == "ART") {
        this.deltaTagY = -this.w * this.sizeScale * 6.0;
      } else if (this.tag == "EDUCATION") {
        this.deltaTagY = -this.w * this.sizeScale * 8.0;
      } else if (this.tag == "MEXICO") {
        this.deltaTagY = -this.w * this.sizeScale * 10.0;
      }
    } else {
      this.deltaTagY = 0;
    }



    this.currentX = (this.x + this.deltaX) * this.sizeScale;
    this.currentY = (this.y + this.deltaY + this.deltaTagY);


    if (this.isOver) {
      fill(this.fillColor);
      ellipse(this.currentX, this.currentY, this.w * this.sizeScale * 1.3, this.h * this.sizeScale * 1.3);
      fill(255);
      ellipse(this.currentX, this.currentY, this.w * this.sizeScale * 1.1, this.h * this.sizeScale * 1.1);
      fill(this.fillColor);
      rect(this.currentX - (this.w / 20 * this.sizeScale), this.currentY - this.w * this.sizeScale * 1.5, this.w / 10 * this.sizeScale, this.h * this.sizeScale);
      textSize(this.w * this.sizeScale / 3);
      text(String(this.name), this.currentX, this.currentY - this.w * this.sizeScale * 2.3);
      textSize(this.w * this.sizeScale / 4);
      text(String(this.projectName), this.currentX, this.currentY - this.w * this.sizeScale * 2.0);

      textAlign(LEFT, LEFT);
      textSize(48);
      var aString = this.tag;
      text(aString, 20, windowHeight - 215);
      stroke(this.fillColor);
      //strokeWeight(1);  // Thicker
      line(this.currentX, this.currentY + this.w * this.sizeScale * 0.3, 30 + textWidth(aString), windowHeight - 215);
      noStroke();
      textSize(32);
      text(String(this.name), 20, windowHeight - 175);
      textSize(18);
      text(String(this.projectName), 20, windowHeight - 150);


    }


    noStroke();
    fill(this.fillColor);
    //rect(this.x + this.deltaX, this.y+this.deltaY, this.w * this.sizeScale, this.h * this.sizeScale);
    ellipse(this.currentX, this.currentY, this.w * this.sizeScale, this.h * this.sizeScale);
    fill(255);
    //ellipse(this.x + this.deltaX, this.y, this.w * this.sizeScale*1.1, this.h * this.sizeScale*1.1);
    //fill(this.fillColor);
    textAlign(CENTER, CENTER);
    textSize(this.w * this.sizeScale / 4);
    text(String(this.yr), this.currentX, this.currentY);





  }


  this.update = function(_sizeScale, _deltaX, _deltaY) {

    this.sizeScale = _sizeScale;
    this.deltaX = _deltaX;
    this.deltaY = _deltaY;
  }


  this.clicked = function() {
    isClicked = false;
    var d = dist(mouseX, mouseY, this.currentX, this.currentY);
    if (d < this.w * this.sizeScale / 2) {
      isClicked = true;
      //window.open(String(this.link));
      //this.fillColor = color(255, 0, 200);
    }



  }

  this.released = function() {
    isClicked = false;
    var d = dist(mouseX, mouseY, this.currentX, this.currentY);
    if (d < this.w * this.sizeScale / 2) {
      isClicked = true;
      window.open(String(this.link));
      //this.fillColor = color(255, 0, 200);
    }



  }


  this.over = function() {

    var d = dist(mouseX, mouseY, this.currentX, this.currentY);
    if (d < this.w * this.sizeScale / 2) {
      this.isOver = true;
      //this.fillColor = color(255, 0, 200);
    } else {

      this.isOver = false;
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
    }



  }












}