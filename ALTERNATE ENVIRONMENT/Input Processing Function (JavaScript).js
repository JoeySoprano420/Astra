// C.O.R.I and SDPM mechanics
function processInputData(data) {
    foreach (let d of data) {
        // Process cascading effects
        cascadeEffects(d);
        
        // Overlap and rotate data for analysis
        overlapData(d);
        rotateData(d);
    }
}
