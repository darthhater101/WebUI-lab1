export default class Cell {
    constructor(value) {
        this.value = value;
    }

    isNull() {
        return this.value == 0;
    }
}