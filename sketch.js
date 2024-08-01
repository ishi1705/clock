function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for angles
  background ('lightblue')
}
function draw() {
 
  
  translate(width / 2, height / 2); // Move the origin to the center of the canvas
  // Rotate to make 12 o'clock at the top
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(6);
  noFill();
  
  // Draw the seconds hand
  stroke('red');
  let secondAngle = map( 0, 60, 0, 360);
  push();
  rotate(secondAngle);
  line(0, 0, 100, 0);
  pop();
  
  // Draw the minutes hand
  stroke(150, 100, 255);
  let minuteAngle = map( 0, 60, 0, 360);
  push();
  rotate(minuteAngle);
  line(0, 0, 75, 0);
  pop();
  
  // Draw the hour hand
  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hourAngle);
  line(0, 0, 50, 0);
  pop();
  
  // Draw the clock's dial
  stroke(0);
  strokeWeight(10);
  stroke('darkblue');
  ellipse(0, 0, 300, 300);
  
  // Draw the numbers on the clock
  textAlign(CENTER, CENTER);
  textSize(20);
  fill('darkblue');
  noStroke();
  for (let num = 1; num <= 12; num++) {
    let angle = map(num, 0, 12, 0, 360);
    let x = 130 * cos(angle - 90);
    let y = 130 * sin(angle - 90);
    text(num, x, y);
  }
}
