let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  if (button1 = clicked) {
  drawStatic();
  }
  if (button2 = clicked){
  drawCreature(x, y, 0, 1.0);
  }
} //referenced CCL03R - step3 by MOON

function drawCreature(x, y,a, s){
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  drawLegs(x, y, 0, 1.0);
  drawEars(x, y, 0, 1.0);
  drawBody(x, y, 0, 1.0);
  drawEyes(x, y, 0, 1.0);
  drawNose(x, y, 0, 1.0);
  drawMouth(x, y, 0, 1.0);
  pop();
}

function drawBody(x, y, a, s){
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  stroke(10);
  fill(240, 130, 38);
  ellipse(200, 200, 150, 150);
  pop();
} // referenced CCL03R - step2 by MOON

function drawLegs(x, y, a, s) {
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  stroke(10);
  fill(246, 91, 13);
  ellipse(230, 275, 10, 15); //right 1
  ellipse(240, 270, 10, 15); //right 2
  ellipse(160, 270, 10, 15); //left 1
  ellipse(170, 275, 10, 15); //left 2
  pop();
}

function drawEars (x, y, a, s){
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  stroke(10);
  fill(246, 91, 13);
  ellipse(240, 120, 50, 60); //left
  ellipse(160, 120, 50, 60); //right
  fill(240, 130, 38);
  ellipse(240, 120, 20, 30);
  ellipse(160, 120, 20, 30);
  pop();
}

function drawEyes(x, y, a, s){
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  stroke(10);
  //outermost
  fill(246, 91, 13);
  ellipse(180, 175, 20, 20)
  ellipse(220, 175, 20, 20);
  //middle
  fill(240, 130, 38);
  ellipse(180, 175, 13, 13);
  ellipse(220, 175, 13, 13);
  //innermost
  fill(246, 91, 13);
  ellipse(180, 175, 5, 5);
  ellipse(220, 175, 5, 5);
  pop();
}

function drawNose(x, y, a, s){
  push();
  translate(x, y);
  rotate(a);
  scale(s);
  stroke(10);
  fill(246, 91, 13);
  rectMode(CENTER);
  rect(200, 200, 20, 10, 20);
  pop();
}

function drawMouth (x, y, a ,s) {
  push();
  translate(x,y);
  rotate(a);
  scale(s);
  stroke(10);
  fill(246, 91, 130);
  arc(200, 210, 80, 80, 0, PI, CHORD);
  pop();
}

function drawStatic(){
    noStroke();
  let rectSize = 5;
  for (let x = 0; x < width; x += rectSize) {
    for (let y = 0; y < height; y += rectSize) {
      fill(random(255), random(255), random(255));
      rect(x, y, rectSize, rectSize);
    }
  }
} //referenced cclab 5.1 - 03 by MOON
