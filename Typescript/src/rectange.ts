// interface Shape {
//     width: number;
//     height: number;
//     CalcCircumference(): number;
// }

class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    CalcCircumference(): number {
        return 2 * this.width * this.height;
    }

    static WhoAmI(): void {
        console.log("I am rectangle");
    }
}

let rec1 = new Rectangle(2, 5);

console.log(rec1.CalcCircumference());
console.log(Rectangle.WhoAmI());

class Square extends Rectangle {
    side: number;
    constructor(side: number) {
        super(side, side);
        this.side = side;
    }

    CalcCircumference(): number {
        return this.side * this.side;
    }

    static WhoAmI(): void {
        console.log("I am square");
    }
}

console.log("-----------------------------------");

let sq1 = new Square(5);
console.log(sq1.CalcCircumference());
console.log(Square.WhoAmI());
