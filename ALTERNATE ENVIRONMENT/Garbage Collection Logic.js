setInterval(() => {
    // Example of clearing up unused resources
    global.gc(); // Trigger garbage collection
    console.log('Garbage collection executed.');
}, 60000); // Run every minute
