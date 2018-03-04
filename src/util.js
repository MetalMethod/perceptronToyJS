//aux methods
function randomFromInterval(min,max){
  if (min < 0) {
    return min + Math.random() * (Math.abs(min)+max);
  }else {
    return min + Math.random() * max;
  }
}