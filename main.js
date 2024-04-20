// Created a new Neural Network
const network = new brain.NeuralNetwork({ hiddenLayers: [3] });

// Training Network with 4 input objects
network.train([
    {input:[0,0], output:[0]},
    {input:[0,1], output:[1]},
    {input:[1,0], output:[1]},
    {input:[1,1], output:[0]}
]);

// Expected output of [0,0]
result = network.run([0,0]);

// Display probability
document.getElementById("out").innerText = result;

console.log("no u");