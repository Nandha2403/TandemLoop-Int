class Calculator {
  constructor(a, b, operation) {
    (this.a = a), (this.b = b), (this.operation = operation.toLowerCase());
  }

  calculateValues() {
    switch (this.operation) {
      case "addition":
        return this.a + this.b;
      case "subtraction":
        return this.a - this.b;
      case "multiplication":
        return this.a * this.b;
      case "division":
        if (a !== 0) {
          return this.a / this.b;
        } else {
          return "Cannot divide by zero";
        }
      default:
        return "Invalid operation";
    }
  }
}

let a = 10;
let b = 20;

let operation = "subtraction";

let calc = new Calculator(a,b,operation)
let result = calc.calculateValues()
console.log(result);
