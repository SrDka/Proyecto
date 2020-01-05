function setup() {
		  createCanvas(1920, 200);
		  frameRate(60);
		}

function draw() {
		  background(220);
		  noStroke();
		  ellipse(mouseX,mouseY,mouseX,mouseY);
		  fill(mouseX,mouseY,0);
		 }