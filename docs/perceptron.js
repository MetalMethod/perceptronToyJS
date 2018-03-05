class Perceptron{

    constructor(inputsNumber, learningRate){
        this.inputsNumber = inputsNumber;
        this.weights = Array(this.inputsNumber);
        this.initWeights();
        this.learningRate = learningRate;
    }

    //random intial weights
    initWeights(){
        for(let i = 0; i < this.weights.length; i++){
            this.weights[i] = randomFromInterval(-1,1);
        }
    }

    //inputs is a floats array
    predict(inputs){
        //calculte the sum of all weighted inputs
        let sumOfWeightedInputs = 0;
        for (let i = 0; i < this.weights.length; i++){
            sumOfWeightedInputs += inputs[i] * this.weights[i];
        }
        return this.activate(sumOfWeightedInputs);
    }

    // ACTIVATION FUNCTION: sign function from mathematics
    //sign is util math funtion on util.js
    activate(sumOfWeightedInputs){
        return sign(sumOfWeightedInputs);
    }

    //TRAINING
    //target is a correct answer, in this caase is the label of the training set
    train(input, target){
        let prediction = this.predict(input);
        let error = target - prediction;    
        //adjust weights
        for(i = 0; i < this.weights.length; i++){
          this.weights[i] += error * input[i] * this.learningRate;
        }
      }
     
}
