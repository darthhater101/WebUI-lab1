import Cell from './Cell.js';

export default class Board {
    constructor() {
        this.cells = [
            new Cell(1),
            new Cell(2),
            new Cell(3),
            new Cell(4),
            new Cell(5),
            new Cell(6),
            new Cell(7),
            new Cell(8),
            new Cell(9),
            new Cell(10),
            new Cell(11),
            new Cell(12),
            new Cell(13),
            new Cell(14),
            new Cell(0),
            new Cell(15)
        ];
        this.zeroCellIndex = 14;
        this.reset();
    }

    move(index) {
        if ((Math.abs(index - this.zeroCellIndex) == 1 && Math.floor(index / 4) == Math.floor(this.zeroCellIndex / 4))
            || Math.abs(index - this.zeroCellIndex) == 4) {

            var min = Math.min(index, this.zeroCellIndex);
            var max = Math.max(index, this.zeroCellIndex);
            var buff = this.cells[min];
            this.cells[min] = this.cells[max];
            this.cells[max] = buff;
            this.zeroCellIndex = index;
        }
    }

    shuffle() {
        var random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        for (var i = 0; i < this.cells.length; i++) {
            var randIndex = random(i, this.cells.length);
            var buff = this.cells[i].value;
            this.cells[i].value = this.cells[randIndex].value;
            this.cells[randIndex].value = buff;
            if (this.cells[i].value === 0) {
                this.zeroCellIndex = i;
            }
        }
    }

    isSolvable() {
        var zeroCellRow = Math.floor(this.zeroCellIndex / 4) + 1;
    
        var N = 0;
        for(var i = 0; i < this.cells.length - 1; i++) {
            for(var j = i + 1; j < this.cells.length; j++) {
                var iNumber = this.cells[i].value;
                var jNumber = this.cells[j].value;
                if(iNumber > jNumber && jNumber && iNumber) {
                    N++;
                }
            }
        }
        return !((N + zeroCellRow) & 1)
    }
    
    isOrdered() {
        if(this.cells[0].isNull()) return false;
        for(var i = 0; i < this.cells.length - 2; i++) {
            if(this.cells[i].value > this.cells[i + 1].value) {
                return false;
            }
        }
        return true;
    }
    
    reset() {
        do {
            this.shuffle();
        } while (!this.isSolvable())
    }
}