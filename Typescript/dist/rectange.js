"use strict";
// interface Shape {
//     width: number;
//     height: number;
//     CalcCircumference(): number;
// }
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference() {
        return 2 * this.width * this.height;
    }
    static WhoAmI() {
        console.log("I am rectangle");
    }
}
let rec1 = new Rectangle(2, 5);
console.log(rec1.CalcCircumference());
Rectangle.WhoAmI();

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    CalcCircumference() {
        return this.height * 4;
    }
    static WhoAmI() {
        console.log("I am square");
    }
}
console.log("-----------------------------------");
let sq1 = new Square(5);
console.log(sq1.CalcCircumference());
Square.WhoAmI();
