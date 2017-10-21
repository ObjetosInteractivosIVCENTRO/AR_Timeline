function Item(_x, _y, _w, _h, _sizeScale, _deltaX, _name,_projectName,_year,_link,_tag,_id) {
  this.x = _x;
  this.y = _y;
  this.w = _w;
  this.h = _h;
  this.sizeScale = _sizeScale;
  this.deltaX = _deltaX;
  this.name = _name;
  this.projectName = _projectName;
  this.yr = _year;
  this.link = _link;
  this.tag = _tag;
  this.id = _id;
  this.fillColor;
  this.textColor;
  
  
   textColor = color(255, 255, 255);
   
  if(this.tag == "EXAMPLES"){
    fillColor = color(0, 0, 0);
  }

  this.draw = function() {
    fill(fillColor);
    //rect(this.x + this.deltaX, this.y, this.w * this.sizeScale, this.h * this.sizeScale);
    ellipse(this.x + this.deltaX, this.y, this.w * this.sizeScale, this.h * this.sizeScale);
    fill(textColor);
    textAlign(CENTER);
    textSize(this.w * this.sizeScale/4);
    text(String(this.yr),this.x + this.deltaX, this.y);
  }


  this.update = function(_sizeScale, _deltaX) {

    this.sizeScale = _sizeScale;
    this.deltaX = _deltaX;
  }











}