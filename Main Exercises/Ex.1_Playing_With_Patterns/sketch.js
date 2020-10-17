// let numOfSegments = 10;

function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    smooth(); // Anti-aliasing
}

function draw() {
    background(0 ,0, 0);
    stroke(0, 0, 100);
    // strokeWeight(1);
    
    // Mapped Variables:
    let dynamicSegments = map(mouseX, 0, width, 6, 12);
    let segmentLength = abs(map(mouseX, 0, width, -100, 100));
    let segmentWeight = map(mouseY, height, 0, 1, 10);

    let stepAngle = TWO_PI / dynamicSegments; // Equally divide the spacing between segments within the circumference.

    /**
     * DRAW OBJECTS:
     */
    for (let i = 0; i <= dynamicSegments; i += stepAngle) {
        push();
            translate(width / 2, height / 2);
            rotate(i);

            strokeWeight(segmentWeight);
            line(0, 0, segmentLength, segmentLength);
        pop();
    }
}
