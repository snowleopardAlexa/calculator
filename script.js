// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so // that programs can change the document structure, style, and content. The DOM represents the document as // nodes and objects; that way, programming languages can interact with the page.


class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    // clear the calculator 
    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    // delete function
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    // append number function 
}