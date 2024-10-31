let colors = [ 
  '#ffa537', // Arancio
  '#732587', // Viola scuro
  '#8f3838', // Marrone
  '#caae15', // Giallo oro
];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  noLoop();
  setInterval(() => {
    location.reload();
  }, 2000);
}

function draw() {
  background("#fdf2df");
  noFill();
  blendMode(MULTIPLY);
  strokeWeight(3);
  
  //array delle posizioni verticali (y) di ogni serie di glifi
  const verticalPositions = [70, 170, 270, 370, 470, 570];

  for (let i = 0; i < 20; i++) {
    let xOffset = (70 * i) + 70;

    //forEach applica una certa azione per ogni elemento dell'array
    verticalPositions.forEach(yOffset => {
      stroke(random(colors));
      translate(xOffset, yOffset);
      repetition(random(3, 6), 50, random(3, 5));
      resetMatrix(); // Resetta la matrice per evitare l'accumulo delle trasformazioni
    });
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