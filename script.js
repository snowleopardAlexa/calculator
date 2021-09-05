// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so // that programs can change the document structure, style, and content. The DOM represents the document as // nodes and objects; that way, programming languages can interact with the page.


class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    // function
    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    // function
    delete() {
     
    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all]')
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')




