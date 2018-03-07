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
    if (DataPoint.x > DataPoint.y) {
        return 1;
    } else {
        return -1;
    }
}


// A point of data in space  
// [x, y] that are the inputs of the perceptron.
class DataPoint {
    constructor(trainingLine) {
        //this.trainingLine = trainingLine;
        this.y = randomFromInterval(0, CANVAS_HEIGHT);
        this.x = randomFromInterval(0, CANVAS_WIDTH);
        this.bias = BIAS;
        this.label = 0;
        // this.cartesian_x
        // this.cartesian_y
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