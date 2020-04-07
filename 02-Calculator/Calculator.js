import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numPad = numpad;
        this.outputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad;
    }

    setupNumPad() { 
        this.numpad.children.array.forEach(element => {
            element.addEventListener("click", this.onButtonClick.bind(this.element.innerText));
        });
    }

    onButtonClick(symbol) {
        symbol.printSolution(symbol.innerText);
        console.log(this);
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
