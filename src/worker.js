const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  console.log(`Worker thread received message: ${message}`);
  
  // Sending a message back to the main thread
  const responseMessage = `Worker processed message: ${message}`;
  parentPort.postMessage(responseMessage);
});