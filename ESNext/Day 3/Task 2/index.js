class Shape {
    static count = 0;
    constructor(height, width) {
        this.height = height;
        this.width = width;
        Shape.count++;
    }

    static getCount() {
        return Shape.count;
    }
}

Shape.prototype.toString = function () {
    console.log(`The perimeter of the ${this.name} is: ${this.perimeter()} and the area is: ${this.area()}`);
};

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.name = "Rectangle";
    }
}

Rectangle.prototype.perimeter = function () {
    return 2 * (this.height + this.width);
};

Rectangle.prototype.area = function () {
    return this.height * this.width;
};

class Square extends Shape {
    constructor(side) {
        super(null, null);
        this.name = "Square";
        this.side = side;
    }
}

Square.prototype.perimeter = function () {
    return 4 * this.side;
};

Square.prototype.area = function () {
    return this.side * this.side;
};

class Circle extends Shape {
    constructor(r) {
        super(null, null);
        this.name = "Circle";
        this.r = r;
    }
}

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.r;
};

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.r, 2);
};

let rectangle1 = new Rectangle(10, 20);
let square1 = new Square(10);
let circle1 = new Circle(5);
