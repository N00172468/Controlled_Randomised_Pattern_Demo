function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    smooth(); // Anti-aliasing
    rectMode(CENTER);
}

function draw() {
    background(0 ,0, 0, 0.25);
    stroke(0, 0, 100);

    let transValX = width/2;
    let transValY = height/2;
    let rotateVal = atan2(mouseY - transValY, mouseX - transValX);
    
    push();
        translate(transValX, transValY);
        // rotate(atan(mouseY / mouseX));
        rotate(rotateVal);

        stroke(360, 100, 100);
        strokeWeight(5);
        strokeCap(ROUND);
        fill(0, 0, 100);

        rect(0, 0, 200, 200);
    pop();
}
