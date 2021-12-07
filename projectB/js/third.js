let img;
let sliderR, sliderG, sliderB;
let sound;
let song;

function preload() {
  img = loadImage("assets/third/sky3.jpg");
  song = loadSound("assets/third/freeze.mp3");
}

function setup() {
  createCanvas(350, 350);
  background(220);

  sliderR = document.getElementById('slider-r');
  sliderG = document.getElementById('slider-g');
  sliderB = document.getElementById('slider-b');
  sliderRnd = document.getElementById('slider-rnd');
}

function draw() {
  let rAdj = sliderR.value;
  let gAdj = sliderG.value;
  let bAdj = sliderB.value;
  let randomness = sliderRnd.value;

  //image(img, 0, 0);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(0.5, 5);

    let clr = img.get(x, y);

    let r = red(clr) * rAdj + random(randomness);
    let g = green(clr) * gAdj + random(randomness);
    let b = blue(clr) * bAdj + random(randomness);
    fill(r, g, b);

    noStroke();

    beginShape();
    vertex(x + random(-randomness, +randomness) * 0.5, y + random(-randomness, +randomness) * 0.5);
    vertex(x + random(-randomness, +randomness) * 0.5, y + random(-randomness, +randomness) * 0.5);
    vertex(x + random(-randomness, +randomness) * 0.5, y + random(-randomness, +randomness) * 0.5);
    endShape();

  }
}

function songPlay(){
    song.play();
}
