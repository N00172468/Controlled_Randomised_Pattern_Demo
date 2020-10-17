// let numOfSegments = 10;

function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    smooth(); // Anti-aliasing
}

function draw() {
    background(0 ,0, 0, 0.15);
    stroke(0, 0, 100);
    // strokeWeight(1);
    
    // Mapped Variables:
    let dynamicSegments = map(mouseX, -width, width, 6, 20);
    let segmentLength = abs(map(mouseX, 0, width, -100, 100));
    let segmentWeight = map(mouseY, height, 0, 1, 10);

    let stepAngle = TWO_PI / dynamicSegments; // Equally divide the spacing between segments within the circumference.

    // Setting colours for interpolation:
    let fromColour = color(179, 100, 75); // Start of range
    let toColour = color(299, 100, 90); // End of range

    /**
     * DRAW OBJECTS:
     */
    for (let i = 0; i <= dynamicSegments; i += stepAngle) {
        push();
            translate(width / 2, height / 2);
            rotate(i);

            stroke(lerpColor(fromColour, toColour, i / dynamicSegments)); 
            strokeWeight(segmentWeight);
            line(0, 0, segmentLength, segmentLength);
        pop();
    }
}
