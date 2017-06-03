function setup() {
  createCanvas(1349,637);
  noStroke();
  background(0, 255, 0);

  var inside = color(204, 0, 204);
  var middle = color(255, 255, 0);
  var outside = color(255, 0, 127);

  // These statements are equivalent to the statements above.
  // Programmers may use the format they prefer.
  //var inside = color('#CC6600');
  //var middle = color('#CC9900');
  //var outside = color('#993300');

  push();
  translate(700, 210);
  fill(outside);
  rect(0, 0, 200, 200);
  fill(middle);
  rect(40, 40, 120, 120);
  fill(inside);
  rect(60, 60, 80, 80);
  pop();
  
  
  push();
  translate(460, 210);
  fill(outside);
  rect(0, 0, 200, 200);
  fill(middle);
  rect(40, 40, 120, 120);
  fill(inside);
  rect(60, 60, 80, 80);
  pop();
}