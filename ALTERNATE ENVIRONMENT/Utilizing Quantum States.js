class QuantumState {
    constructor(stateName) {
        this.name = stateName;
        this.isTrue = false;
        this.isLikely = false;
        this.isSuspicious = false;
    }

    updateState(input) {
        if (input === "on") this.isTrue = true;
        else if (input === "off") this.isTrue = false;
        // Additional logic based on input
    }
}

const state = new QuantumState("DynamicState");
