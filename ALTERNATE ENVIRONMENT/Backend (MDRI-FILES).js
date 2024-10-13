const express = require('express');
const { Worker } = require('worker_threads');
const { compileAOT } = require('./path/to/Astra');
const { jitToAssembly } = require('./path/to/EAL');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/compile', async (req, res) => {
    const code = req.body.code;
    const compiledCode = await compileAOT(code);
    res.json({ compiledCode });
});

app.post('/jit', async (req, res) => {
    const compiledCode = req.body.compiledCode;
    const assemblyCode = await jitToAssembly(compiledCode);
    res.json({ assemblyCode });
});

setInterval(() => {
    global.gc(); // Trigger garbage collection
    console.log('Garbage collection executed.');
}, 60000);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
