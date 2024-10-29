let colors = [
  '#FF8C00', // Arancio
  '#4B0082', // Viola scuro
  '#A52A2A', // Marrone
  '#FF4500', // Rosso pomodoro
  '#FFD700', // Giallo oro
  '#8B4513'  // Marrone cioccolato
];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  noLoop();
  // Cambia disegno dopo un intervallo di tempo in automatico
  setInterval(() => {
    location.reload();
  }, 2000);
}

function draw() {
  background("#ffdeb3");
  noFill();
  blendMode(MULTIPLY);
  strokeWeight(3);

  // Rigenera le righe di glifi
  for (let i = 0; i < 20; i++) {
    stroke(random(colors)); // Scegli un colore casuale dall'array
    push();
    translate((70 * i) + 70, 70);
    repetition(random(1, 3), 50, random(3, 5));
    pop();
    push();
    translate((70 * i) + 70, 170);
    repetition(random(1, 3), 50, random(3, 5));
    pop();
    push();
    translate((70 * i) + 70, 270);
    repetition(random(1, 3), 50, random(3, 5));
    pop();
    push();
    translate((70 * i) + 70, 370);
    repetition(random(1, 3), 50, random(3, 5));
    pop();
    push();
    translate((70 * i) + 70, 470);
    repetition(random(1, 3), 50, random(3, 5));
    pop();
    push();
    translate((70 * i) + 70, 570);
    repetition(random(1, 3), 50, random(3, 5));
    pop();
  }
}

function repetition(number = 3, side = 50, points = 4) {
  for (let n = 0; n < number; n++) {
    drawWorm(side, points);
  }
}

function drawWorm(side = 50, points = 7) {
  beginShape();
  for (let p = 0; p < points; p++) {
    let x = random(side);
    let y = random(side);
    curveVertex(x, y);
  }
  endShape();
}
