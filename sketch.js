// let angle = 0;

// function setup() {
//     const cnv = createCanvas(500, 500);
//     cnv.parent('viz1')
// }

// function draw() {
//     background(0, 2);
//     translate(width / 2, height / 2);
//     stroke('turquoise');
//     strokeWeight(4);
//     rotate(angle)
//     for (let i = 0; i < 8; i++) {
//         rotate(PI / 4)
//         line(0, 0, 100, 0);
//         push();
//         translate(0, 0);
//         rotate(-angle * 2);
//         stroke('yellow');
//         line(100, 100, 100, 0);
//         translate(100, 0);
//         rotate(angle * 2);
//         stroke('magenta');
//         line(0, 100, 100, 0);
//         pop();
//     }
//     angle += 0.01;
// }


const letters = ['c', 'r', 'e', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'i', 'n', 'g', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', 'i', 't', 'h', ' ', 'p', '5', 'j', 's', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

let i = 0;
let cnv;
let angle = 0;

function setup() {
    cnv = createCanvas(1000, 800);
    cnv.parent('viz1')
    textSize(60)
    textFont('monospace')
    fill('#e7ad52');
    strokeWeight(4)
    frameRate(10)
}

function draw() {
    if (i === 0) {
        background(17, 17, 17);
    }
    if (i > 32) {

    }
    translate(150, 250)
    if (i > 24 && i < 34) {
        rotate(i / 50);
    }
    if (i > 17 && i < 25) {
        stroke(255, 50)
        line(0, 10, 560, 10);
    }
    noStroke();
    text(letters[i], (i % 25) * 40, (i < 25) ? 0 : 70);

    if (i > 35 && i < 55) {
        push();
        translate(-80, 0);
        fill(255)
        rotate(i / 3)
        rect(0, 0, 40, 5);
        pop();
    }
    angle += 0.1;
    i = frameCount % letters.length;
}