class Perceptron{

    constructor(input_number){
        this.input_number = input_number
        this.weights = Array(this.input_number)
        this.initWeights()
    }

    //random intial weights
    initWeights(){
        for(let i = 0; i < this.weights.length; i++){
            this.weights[i] = randomFromInterval(-1,1)
        }
    }

    //inputs is a floats array
    predict(inputs){
        //calculte the sum of all weighted inputs
        let sum_of_weighted_inputs = 0;
        for (let i = 0; i < this.weights.length; i++){
            sum_of_weighted_inputs += inputs[i] * this.weights[i];
        }
        return this.activate(sum_of_weighted_inputs);
    }

    // ACTIVATION FUNCTION: sign function from mathematics
    //sign is util math funtion on util.js
    activate(sum_of_weighted_inputs){
        return sign(sum_of_weighted_inputs)     
    }



    

}
