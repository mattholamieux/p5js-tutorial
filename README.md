## Creative Coding with P5.js

p5js is a javascript library for working with the HTML canvas. It is great for creating visual art, graphic design, and animation with code. 

- [INTRO TO P5 WALKTHROUGH]()
    - [getting started](#getting-set-up-with-p5js)
    - [setup and draw](#setup-and-draw)
    - [drawing on the canvas](#drawing-on-the-canvas)
    - [stroke and fill](#stroke-and-fill)
    - [the draw loop](#a-closer-look-at-the-draw-loop)
    - [clearing the background](#clearing-the-background)
    - [other shapes](#other-shapes)
    - [global values](#a-note-about-global-values)
    - [transformations](#applying-transformations)
    - [basic animation](#basic-animation)
- [USEFUL P5 METHODS AND VARIABLES](#useful-p5-methods-and-variables)
- [EXAMPLES](#some-examples)


### Getting started with p5js

- p5js has a great web-based code editor here: 
    - https://editor.p5js.org/
- if you prefer to work in your own editor, you can download the library or grab a link to the CDN here: 
    - https://p5js.org/download/
- p5js has excellent documentation here: 
    - https://p5js.org/reference/

### Setup and Draw

- All p5 sketches contain two default functions: `setup()` and `draw()`
- The setup function runs once at the beginning of your program. This is where we can initalize things before we run the _draw_ function.
- The _draw_ function is an animation loop. It will run multiple times per second, depending on the frame rate (set to 60 fps by default).
- In most p5 sketches, we will run `createCanvas()` at the begining of the _setup_ function, which attaches an HTML canvas element to the DOM. This function takes two arguments, the width and height of the canvas we want to create.


### Drawing on the Canvas

- Let's draw something to the canvas. In this example, we start by creating a canvas with a width and height of 400px in the `setup()` function. Then, in the `draw()` function we set the fill color to turquoise and draw an circle. The three arguments of the `circle()` function are the x position, y position, and diameter. 
- Note that in p5js, all positioning is relative to the top-left corner (i.e. an element drawn at position 0, 0 will be in the top left corner).

    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        circle(100, 200, 50);
    }
    ```

### Stroke and Fill

- Our sketch could use a bit of color. P5 provides a number of functions to manipulate the stroke and fill colors. 
- In the example below, we first set the stroke color to pink. We then set the stroke weight to 5 px. Finally we set the fill color to turquoise before rendering the circle on the canvas.

    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        stroke('pink');
        strokeWeight(5);
        fill('turquoise');
        circle(100, 200, 50);
    }
    ```

### A Closer Look at the Draw Loop
- Remember that everything that is in the `draw()` loop is being executed multiple times per second, based on the frame rate. In the example above, we can't tell because the same element is being re-drawn at the same position each time through the loop (like flipping through a flipbook where every page is the same).
- Let's try adding some movement so that we can see the draw loop in action. change the first two arguments of `circle()` to `mouseX` and `mouseY`. The x and y positions of the circle will now change based on the position of the mouse cursor.

    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        stroke('pink');
        strokeWeight(5);
        fill('turquoise');
        circle(mouseX, mouseY, 50);
    }
    ```

### Clearing the Background
- Now, when we move the mouse we can see that the circle is being redrawn in a new location. But each previous rendering of the circle is still on the canvas. What if we want to see only a single circle, redrawn at the new position each time through the draw loop? 
- We can use the `background()` function to redraw the background at the beginning of each loop. Thinking back to the flipbook analogy, this is like flipping to a new page each time we go through the draw loop. 

    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background('yellow');
        stroke('pink');
        strokeWeight(5);
        fill('turquoise');
        circle(mouseX, mouseY, 50);
    }
    ```

### Other Shapes
- So far we've just used the `circle()` function, but P5js gives us access to a number of additional functions for drawing shapes. Try adding these shapes to your canvas.

- `line(x1, y1, x2, y2)` 
    - draws a line between two points
- `rect(x, y, width, height)`
    - draws a rectangle at position x, y with the specified width and height
- `point(x, y)`
    - draws a single point at the specified x/y location. 
    - note that the size of the point can be changed by setting `strokeWeight()` calling `point()`
- `triangle(x1, y1, x2, y2, x3, y3)`
    - draws a triangle by connecting the three points specified as arguments

### A note about global values
- Note that some functions like `fill()` and `stroke()` set values for global settings. If you set `fill('red')` and then draw a circle, square, and triangle, they will all be filled red. However, you can call `fill()` multiple times, resetting the color value each time. 
- In the example below, the stroke color, fill color, and stroke weight are all set multiple times to provide different settings to different shapes.

    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background('yellow');
        stroke('pink');
        strokeWeight(5);
        fill('turquoise');
        circle(100, 100, 50);
        line(0, 200, 200, 0);
        stroke('coral');
        fill('blue');
        rect(200, 200, 150, 50);
        strokeWeight(20);
        point(100, 100);
    }
    ```

### Applying Transformations

- P5 provides us with a number of functions to easily transform the shapes on the canvas. 
- Note that transformations apply to all elements that are called after the transformation is applied.
- `rotate(angle)`
    - rotates element(s) by degrees. 
- `scale(size)`
    - scales element(s) by percent, where 1.0 = 100%
- `translate(x, y)`
    - displaces element(s) by number of pixels on x/y axis
    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background('yellow');
        stroke('pink');
        strokeWeight(5);
        fill('turquoise');
        rect(0, 0, 50, 50);
        translate(200, 100);
        rotate(45);
        scale(2);
        rect(0, 0, 50, 50);
    }
    ```

### Basic Animation
- Let's make an object spin, shall we?
- To achieve this, we can use `rotate()`, but instead of passing a static value as the argument, we need to use a variable that increments each time through the loop.
    ```
    let a = 0;

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
        background(0);
        noStroke();
        fill('turquoise');
        translate(200, 200);
        rotate(a);
        rect(0, 0, 5, 100);
        a += 0.01;
    }
  ```
- It's spinning! Neato torpedo!
- Let's expand on this by adding a second `rect()` and applying different transformations to it. 
    ```
    let a = 0;

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
        background(0);
        noStroke();
        fill('turquoise');
        translate(200, 200);
        rotate(a);
        rect(0, 0, 5, 100);
        fill('pink');
        translate(0, 100);
        rotate(-a*2);
        rect(0, 0, 5, 50);
        a += 0.01;
    }
  ```
- Wanna know a cool trick? If you pass a second argument to `background()` this will change the alpha value. If you set it to a lower value (e.g. `background(0, 10)`), it will create a cool trailing effect. 


### Useful p5 methods and variables

- `createCanvas(width, height)`
    - attaches an html canvas to the DOM.
- `background(string/hex/rgb)`
    - sets the background color. 
    - note that colors can be specified as a string `('white')`, as a hex value `('#fff')`, or as rgb values `(255, 255, 255)`;
- `fill(string/hex/rgb)`
    - fills element(s) with specified color.
- `stroke(string/hex/rgb)`
    - draws element(s) with the specified stroke color.
- `strokeWeight(pixels)`
    - draws element(s) with the specified stroke weight.
- `noStroke()`
    - draws element(s) without any stroke.
- `circle(x, y, diameter)`
    - draws a cirle at x/y position, with specified diameter.
- `line(x1, y1, x2, y2)` 
    - draws a line between two points.
- `rect(x, y, width, height)`
    - draws a rectangle at x/y position with the specified width and height
- `point(x, y)`
    - draws a single point at the specified x/y location. 
    - note that the size of the point can be changed by setting `strokeWeight()` calling `point()`
- `triangle(x1, y1, x2, y2, x3, y3)`
    - draws a triangle by connecting the three points specified as arguments
- `rotate(angle)`
    - rotates element(s) by degrees. 
- `scale(size)`
    - scales element(s) by percent, where 1.0 = 100%
- `translate(x, y)`
    - displaces element(s) by number of pixels on x/y axis
- `random(min, max)`
    - an easy way to generate a random floating-point number between two numbers. If only one argument is passed, will generate float between 0 and that number
- `mouseX` and `mouseY`
    - system variables containing the current x and y values of the cursor
- `mouseIsPressed`
    - boolean value that returns true if mouse is pressed and false otherwise.
- `keyIsPressed`
    - boolean value that returns true if any key is pressed and false otherwise.
- `width`
    - system variable that stores the width of the drawing canvas
- `height`
    - system variable that stores the height of the drawing canvas
- `frameCount`
    - system variable that store the number of frames that have passed since the program started
- `text(string, x, y)`
    - a method that allows for easily drawing text to the canvas. Can be altered with `textSize()`, `textFont()`, `textStyle()`, and `fill()`.


### Some Examples
open the links to go to the online p5js editor where you can see the example in action and modify it yourself.

- [mouseIsPressed](https://editor.p5js.org/mbnelson86/sketches/LbjLKyRHw)
    - uses a conditional statement and the `mouseIsPressed` variable to draw circles of different colors to the canvas.
    ```
    function setup() {
        createCanvas(800, 800);
    }

    function draw() {
        if (mouseIsPressed) {
            fill('cyan');
        } else {
            fill('yellow');
        }
        circle(mouseX, mouseY, 50);
    }
    ```
- [Ticker Tape](https://editor.p5js.org/mbnelson86/sketches/DDk08OMc9)
    - uses `frameCount % width` to create a counter that resets once it reaches the width of the screen, and uses this to animate text across the screen. 
    ```
    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(220);
        textSize(32);
        textFont('roboto');
        text('hello world', frameCount%width, 100)
    }
    ```