class Employee {
    constructor(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
    }

    calculateWeeklyPay() {
        throw new Error("You have to implement the method first!");
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTitle() {
        return this.jobTitle;
    }

    getTitle(title) {
        this.jobTitle = title;
    }
}

class HourlyEmployee extends Employee {
    constructor(name, jobTitle, payRate, hoursWorked) {
        super(name, jobTitle);
        this.payRate = payRate;
        this.hoursWorked = hoursWorked;
    }
    calculateWeeklyPay() {
        console.log(`${this.name}'s weekly pay is ${this.payRate * this.hoursWorked}`);
    }
}

class SalaryEmployee extends Employee {
    constructor(name, jobTitle, weeklySalary) {
        super(name, jobTitle);
        this.weeklySalary = weeklySalary;
    }

    calculateWeeklyPay() {
        console.log(`${this.name}'s weekly pay is ${this.weeklySalary}`);
    }

    getTitle() {
        return this.weeklySalary;
    }

    getTitle(salary) {
        this.weeklySalary = salary;
    }
}

let omar = new HourlyEmployee("Omar", "SWE", 200, 8);
let anas = new SalaryEmployee("Anas", "Front-End", 1000);
