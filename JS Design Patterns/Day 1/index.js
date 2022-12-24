class Book {
    static bookId = 0;
    constructor(author, name, price, rackNo, status, edition, dateOfPurchase) {
        this.bookId = ++Book.bookId;
        this.author = author;
        this.name = name;
        this.price = price;
        this.rackNo = rackNo;
        this.status = status;
        this.edition = edition;
        this.dateOfPurchase = dateOfPurchase;
    }

    displayBookDetails() {
        console.log(
            `Book ${this.name} written by ${this.author} for a price of $${this.price}! Availability: ${this.status}`
        );
    }

    updateStatus() {
        if (this.status === true) this.status = false;
        else this.status = true;
    }
}

class Journals extends Book {}

class StudyBooks extends Book {}

class Magazines extends Book {}

class Librarian {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    searchBook(targetBook, books) {
        // console.log(targetBook);
        // console.log(books);
        // books.forEach((book) => {
        //     if (targetBook === book) {
        //         console.log("found it");
        //     }
        // });

        if (books.includes(targetBook)) {
            console.log("Found");
        } else {
            console.log("book isn't found");
        }
    }
    verifyMember(member) {
        let phoneNoCheck = new RegExp("^01[0125][0-9]{8}$");
        if (
            typeof member.name !== "string" ||
            typeof member.address !== "string" ||
            !phoneNoCheck.test(member.phoneNo)
        ) {
            console.log("Invalid membership");
        } else {
            console.log("Membership is valid!");
        }
    }
    issueBook(book, db) {
        db.push(book);
    }
    calculateFine() {
        Transaction.transactionsDB.forEach((transaction) => {
            if (new Date() > transaction.dueDate) {
                console.log(
                    `Member ${transaction.memberId} You've been fined for not returning the book within the due date.`
                );
            }
        });
    }

    createBill(member, amount) {
        let bill = new Bill(new Date(), member, amount);
        bill.billCreate();
    }

    returnBook() {
        console.log(`Book returned to the library successfully`);
    }
}

class Transaction {
    static transactionsDB = [];
    static #deletedTransactionsDB = [];
    constructor(transId, memberId, bookId, dateOfIssue, dueDate) {
        this.transId = transId;
        this.memberId = memberId;
        this.bookId = bookId;
        this.dateOfIssue = dateOfIssue;
        this.dueDate = dueDate;
    }

    createTransaction() {
        Transaction.transactionsDB.push(this);
        console.log(`Transaction added to database`);
    }
    deleteTransaction() {
        Transaction.#deletedTransactionsDB.push(this);
        Transaction.transactionsDB = Transaction.transactionsDB.filter((transaction) => transaction !== this);
        console.log(Transaction.transactionsDB);
    }
    retrieveTransaction() {
        Transaction.transactionsDB.push(this);
        Transaction.#deletedTransactionsDB = Transaction.#deletedTransactionsDB.filter(
            (transaction) => transaction !== this
        );
        console.log(Transaction.transactionsDB);
    }
}

class MemberRecord {
    static membersCount = 0;
    constructor(type, dateOfMembership, noBookIssued, maxBookLimit, name, address, phoneNo) {
        this.memberId = ++MemberRecord.membersCount;
        this.type = type;
        this.dateOfMembership = dateOfMembership;
        this.noBookIssued = noBookIssued;
        this.maxBookLimit = maxBookLimit;
        this.name = name;
        this.address = address;
        this.phoneNo = phoneNo;
    }

    retrieveMember() {
        if (this.type === "Cancelled" || this.type === "Expired") {
            this.type = "Active";
        }
    }
    increaseBookIssued() {
        while (this.noBookIssued < this.maxBookLimit) {
            this.noBookIssued++;
        }
    }
    decreaseBookIssued(librarian) {
        while (this.noBookIssued > 0) {
            librarian.returnBook();
            this.noBookIssued--;
        }
    }
    payBill() {
        Transaction.transactionsDB.forEach((transaction) => {
            if (transaction.memberId == this.memberId && new Date() < transaction.dueDate) {
                console.log(`Bill ${transaction.transId} is payed!`);
            }
        });
    }
}

class Student extends MemberRecord {}
class Faculty extends MemberRecord {}

class Bill {
    static #billDB = [];
    static billsNo = 0;
    constructor(date, memberId, amount) {
        this.billNo = ++Bill.billsNo;
        this.date = date;
        this.memberId = memberId;
        this.amount = amount;
    }
    billCreate() {
        Bill.#billDB.push(this);
        console.log(Bill.#billDB);
    }

    billUpdate(amount) {
        this.amount = amount;
    }
}

let b1 = new Book(1, "Omar", "Omar's Biography", 100, 1, true, "first", new Date());
let b2 = new Book(2, "Anas", "Anas's Biography", 50, 2, true, "second", new Date());

b1.displayBookDetails();
b1.updateStatus();
b1.displayBookDetails();

let booksDb = [];

l1 = new Librarian("Omar", "123");
l1.issueBook(b1, booksDb);
// l1.issueBook(b2, booksDb);
console.log(booksDb);
l1.searchBook(b1, booksDb);

t1 = new Transaction(1, 1, 1, new Date(), new Date(new Date().getTime() - 1 * 86400000));
t2 = new Transaction(2, 2, 2, new Date(), new Date(new Date().getTime() + 3 * 86400000));
t3 = new Transaction(3, 1, 2, new Date(), new Date(new Date().getTime() + 2 * 86400000));
t1.createTransaction();
t2.createTransaction();
t2.deleteTransaction();
t2.retrieveTransaction();
// console.log(t1);

// console.log(++MemberRecord.membersCount);

let m1 = new MemberRecord("VIP", "2023", 1, 10, "Omar", "Port Said", "01010150251");
let m2 = new MemberRecord("3ade gdn", "2023", 1, 10, "Hager", "Giza", "31330023");
console.log(m1.memberId);
console.log(m2);

l1.createBill(m1.memberId, 100);
l1.createBill(m2.memberId, 200);

l1.verifyMember(m1);
m1.payBill();

l1.calculateFine();
m1.decreaseBookIssued(l1);
