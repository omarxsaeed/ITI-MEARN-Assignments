/*********************************************** TASK 1 ***********************************************/

function Box(width, height, books) {
    this.width= width;
    this.height = height;
    this.books = books;
}

Object.prototype.calcArea = function() {
    console.log("The area of the box is: ", this.width * this.height);
}

Object.prototype.valueof = function() {
    var totalPages = 0
    this.books.forEach(book => {
        totalPages+= book.numPages;
    });
    console.log("The total number of pages is: ", totalPages);
}

function Book(name, writerName,numPages) {


    Book.count=++Book.count||1;
    var id = Book.count; //private member 
    this.name = name;
    this.writerName = writerName;
    this.numPages = numPages;

    this.getID = function() {
        return id;
    }

    // this.setID = function(_id) {
    //     if(_id > 0) {
    //         id = _id;
    //     } else {
    //         console.log("Enter a valid id");
    //     }
    // }
}

Book.prototype.print = function() {
    console.log("Book: ", this.name, " for ", this.writerName, " has ", this.numPages, " pages.");
}

var got1 = new Book("A Game of Thrones", "George R. R. Martin", 694);
var got2 = new Book("A Clash of Kings", "George R. R. Martin", 768);
var got3 = new Book("A Storm of Swords", "George R. R. Martin", 973);
var got4 = new Book("A Feast for Crows", "George R. R. Martin", 753);
var got5 = new Book("A Dance with Dragons", "George R. R. Martin", 1056);

var gotCollection = [got1, got2, got3, got4, got5];

var gotBox = new Box(100, 200, gotCollection);


gotCollection.forEach(book => {
    book.print()
});

gotBox.valueof();
gotBox.calcArea();

// got1.setID(1);

/*********************************************** TASK 2 ***********************************************/

function Point3D(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Point3D.prototype.print3DPoint = function() {
    console.log("3DPoint: X = ", this.x, " ,Y = ", this.y, " ,Z = ", this.z);
}

Point3D.prototype.calculateDistance = function(p2) {
    var distanceInX = Math.pow((p2.x - this.x), 2);
    var distanceInY = Math.pow((p2.y - this.y), 2);
    var distanceInZ = Math.pow((p2.z - this.z), 2);

    var distance = Math.sqrt(distanceInX + distanceInY + distanceInZ);
    return distance;
}

var p1 = new Point3D(1, 2, 3);
var p2 = new Point3D(4, 5, 6);

p1.print3DPoint();
p2.print3DPoint();

console.log(p1.calculateDistance(p2));