var c = ["#C460E0", 
         "#F469A9", 
         "#69F5E7", 
         "#687DF2", 
         "#69F591",             
         "#F1Ea67"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  noStroke();
  //fill(255, 255, 255);
}

function draw() {
  background(250, 200, 200);


  var rows = height / 50;
  var cols = width / 50;
  var offset = 10;
  for (row = 0; row < rows; row++) {
    //var color = random(255);
      for (col = 0; col < cols; col++) {
        var color = random(255);
       fill(color,color,color);
        drawThing(col * 50 + 25, row * 50 + 25,offset);
      }
      offset+=2;
  }


}


var brownianRadius = 25;

function drawThing(x1, y1,offset) {
  quad(x1, y1, x1, y1+2*offset, x1+offset, y1+2*offset, x1, y1);
  // even
  //radius = random(0, 50);
  //(x, y, radius, radius);
}