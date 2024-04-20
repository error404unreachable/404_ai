// Created a new Neural Network
const network = new brain.NeuralNetwork({ hiddenLayers: [1] });

const trainingData = [
    {input: [0,0], output: [0]},
    {input: [0,1], output: [1]},
    {input: [1,0], output: [1]},
    {input: [1,1], output: [0]}
];

network.train(trainingData, {
    log: (error) => console.log(error)
});