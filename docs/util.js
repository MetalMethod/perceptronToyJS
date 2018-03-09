//constants
const CANVAS_WIDTH = 400;
const UI_HEIGHT = 200;
const CANVAS_HEIGHT = CANVAS_WIDTH;
const MAP_HALF = CANVAS_WIDTH / 2;
const WINDOW_HEIGHT = CANVAS_HEIGHT + UI_HEIGHT;

//cartesian cordenates
const MIN_X = -1;
const MAX_X = 1;
const MIN_Y = -1;
const MAX_Y = 1;




const TRAINING_SIZE = 1500;
const BIAS = 1

//UI SIZES
const UI_GRID_SIZE = 20;
const UI_PADDING = 10;
const UI_TOP = CANVAS_HEIGHT + UI_PADDING;
const UI_HALF_HEIGHT = Math.floor(UI_HEIGHT / 2) + UI_TOP - UI_PADDING;
const UI_BOTTOM = WINDOW_HEIGHT;
const UI_COLUMN = UI_GRID_SIZE * 5;

//PERCEPTRON CONTROLS
const PERCEPTRON_INPUTS = 2;
const PERCEPTRON_INPUTS_BIAS = PERCEPTRON_INPUTS + 1;
const PERCEPTRON_LEARNING_RATE = 0.1;



// ACTIVATION FUNCTION
// sign function in mathematics:
// evaluates if a number is postive or negative.
// and returns -1 for a negative number and +1 for a positive.
function sign(number) {
    if (number >= 0) {
        return 1;
    } else {
        return -1;
    }
}

//aux methods

function randomPosition() {
    return randomFromInterval(0, CANVAS_HEIGHT);
}

function randomFromInterval(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min) + max);
    } else {
        return min + Math.random() * max;
    }    
}

// Describe a line with a math funtion
// f(X) = (a * X) + b
function f(input, a, b){
    a = randomFromInterval(-0.8, 0.8)
    b = randomFromInterval(-0.4, 0.4)
    return a * input + b;
}