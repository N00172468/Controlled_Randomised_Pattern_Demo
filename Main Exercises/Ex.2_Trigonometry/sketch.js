function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    smooth(); // Anti-aliasing
    rectMode(CENTER); // Prevents object from rotating on the top-left corner. Enables rotation within centre of object.
}

function draw() {
    background(0 ,0, 0, 0.5);
    stroke(0, 0, 100);

    // Setting colours for interpolation:
    let fromColour = color(179, 100, 90); // Start of range
    let toColour = color(299, 100, 100); // End of range

    // Trig. Variables:
    let transValX = width/2;
    let transValY = height/2;
    let rotateVal = atan2(mouseY - transValY, mouseX - transValX);
    
    // Loop Variables:
    let col = 7;
    let row = 7;
    let spaceWidth, spaceHeight;
    spaceWidth = width/col;
    spaceHeight = height/row;

    /**
     * LOOPED SQUARES:
     * 
     * - Including:
     *      - Interpolation
     *      - Inverse Tan function for rotation
     */
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            push();
                translate(x * spaceWidth + spaceWidth/2, y * spaceHeight + spaceHeight/2);
                rotate(rotateVal);

                stroke(lerpColor(fromColour, toColour, x * y / 32));
                strokeWeight(5);
                strokeCap(ROUND);
                fill(lerpColor(fromColour, toColour, x * y / 32));
                rect(0, 0, 100, 100);
            pop();
        }
    }
}
