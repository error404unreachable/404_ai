// Created a new Neural Network
const network = new brain.NeuralNetwork();

// Training Network with 4 input objects
network.train([
    {input:[0,0], output:{zero:1}},
    {input:[0,1], output:{one:1}},
    {input:[1,0], output:{one:1}},
    {input:[1,1], output:{zero:1}},
]);

// Expected output of [1,0]
result = network.run([1,0]);

// Display probability
document.getElementById("out").innerText = result["one"] + " " + result["zero"];