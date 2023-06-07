const brain      = require('brain.js')
const trainData  = require('./src/training-data')
const serializer = require('./src/serializer')
const net        = new brain.NeuralNetwork()

net.train(serializer.serialize(trainData), {log: true})
const emotions = net.run(serializer.encode('what a bad night'));
console.log(emotions)