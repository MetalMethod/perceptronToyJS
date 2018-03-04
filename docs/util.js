//constants
const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = CANVAS_WIDTH;
const MAP_HALF = CANVAS_WIDTH / 2;
const TRAINING_SIZE = 1500;

// ACTIVATION FUNCTION
// sign function in mathematics:
// evaluates if a number is postive or negative.
// and returns -1 for a negative number and +1 for a positive.
function sign(number){
  if(number >= 0){
    return 1;
  } else {
    return -1;
  }
}

//aux methods
function randomFromInterval(min,max){
  if (min < 0) {
    return min + Math.random() * (Math.abs(min)+max);
  }else {
    return min + Math.random() * max;
  }
}

function randomPosition(){
  return randomFromInterval(0, CANVAS_HEIGHT)
}