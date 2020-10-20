function setup() {
    createCanvas(700, 700);
    // createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    // colorMode(HSB, width, height, 100);
    smooth(); // Anti-aliasing
    rectMode(CENTER);
}

function draw() {
    background(0 ,0, 0);
    // background(0 ,0, 0, 0.25);
    stroke(0, 0, 100);

    // Setting colours for interpolation:
    let fromColour = color(179, 100, 90); // Start of range
    let toColour = color(299, 100, 100); // End of range

    let transValX = width/2;
    let transValY = height/2;
    let rotateVal = atan2(mouseY - transValY, mouseX - transValX);
    
    // push();
    //     translate(transValX, transValY);
    //     // rotate(atan(mouseY / mouseX));
    //     rotate(rotateVal);

    //     stroke(360, 100, 100);
    //     strokeWeight(5);
    //     strokeCap(ROUND);
    //     fill(0, 0, 10);

    //     rect(0, 0, 100, 100);
    // pop();
    
    let col = 7;
    let row = 7;
    let shapeWidth, shapeHeight;
    shapeWidth = width/col;
    shapeHeight = height/row;

    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            push();
                translate(x * shapeWidth + shapeWidth/2, y * shapeHeight + shapeHeight/2);
                rotate(rotateVal);

                // stroke(360, 100, 100);
                stroke(lerpColor(fromColour, toColour, x * y / 32));
                strokeWeight(5);
                // strokeCap(ROUND);
                // noStroke();
                // fill(0, 0, 10);
                fill(lerpColor(fromColour, toColour, x * y / 32));
                rect(0, 0, 100, 100);
            pop();
        }
    }
}
