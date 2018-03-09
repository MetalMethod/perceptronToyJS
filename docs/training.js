//this class generates the data_set for training

function createTrainingData(trainingLine) {
    dataPointsArray = Array(TRAINING_SIZE);

    for (i = 0; i < dataPointsArray.length; i++) {
        dataPointsArray[i] = new DataPoint(trainingLine);
        dataPointsArray[i].label = classificateDataPoint(dataPointsArray[i]);
        
    }
    return dataPointsArray;
}

function createDataPoint(trainingLine) {
    return new DataPoint(trainingLine);
}

function classificateDataPoint(DataPoint) {
    if (DataPoint.cartesian_x > DataPoint.cartesian_y) {
        return 1;
    } else {
        return -1;
    }
}

// A point of data in space  
// [x, y] that are the inputs of the perceptron.
class DataPoint {
    constructor(trainingLine) {
        this.x = randomFromInterval(0, CANVAS_WIDTH);
        this.y = randomFromInterval(0, CANVAS_HEIGHT);
        
        //p5.js map function
        //n_needed = map(n_now,   min_n_nox, max_n_now,  min_n_want, max_n_want)
        this.cartesian_x = map(this.x, 0, CANVAS_WIDTH, MIN_X, MAX_Y);
        this.cartesian_y = map(this.y, 0, CANVAS_HEIGHT, MIN_Y, MAX_Y);
        
        this.bias = BIAS;
        this.label = 0;
        
        //console.log(this.cartesian_x.toString() + "   " + this.x.toString() )
    }
}

//Math function that defines the dataset point labels
//A line that crosses the space 
//and separates points in 2 classes.
class TrainingLine {
    constructor() {
        this.begin_x = randomPosition();
        this.begin_y = randomPosition();
        this.end_x = randomPosition();
        this.end_y = randomPosition();
    }
}