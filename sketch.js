let x = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(70, 200, 10, 70);
  circle(mouseX, mouseY, 40, 60)

  x = x + 3
}
