let numOfSegments = 6;

function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    smooth(); // Anti-aliasing
}

function draw() {
    background(0 ,0, 0);
    stroke(0, 0, 100);
    strokeWeight(1);
    let stepAngle = TWO_PI / numOfSegments;

    for (let i = 0; i <= numOfSegments; i += stepAngle) {
        push();
            translate(width / 2, height / 2);
            rotate(i);
            line(0, 0, 200, 200);
        pop();
    }
}
