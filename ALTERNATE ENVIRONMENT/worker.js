const { parentPort, workerData } = require('worker_threads');
const { encodeChar, decodeChar } = require('./path/to/encodingLogic');

const result = encodeChar(workerData.char); // Example encoding function
parentPort.postMessage(result);
