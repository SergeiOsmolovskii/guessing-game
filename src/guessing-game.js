class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.mim = min;
    }

    guess() {
       return this.result = Math.ceil((this.max + this.min) / 2);
    }

    lower() {
        return this.max = this.result;
    }

    greater() {
       return this.min = this.result;
    }
}

module.exports = GuessingGame;