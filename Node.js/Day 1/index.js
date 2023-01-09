import { argv } from "process";
import { appendFile } from "fs";

class Student {
    static #id = 0;
    constructor(name, grade) {
        this.id = ++Student.#id;
        this.name = name;
        this.grade = grade;
    }

    appendStudent() {
        appendFile(
            "students data.txt",
            `
Student ${this.id} => Name: ${this.name}, Grade: ${this.grade}
            `,
            function (err) {
                if (err) throw err;
                console.log("Student Appended successfully.");
            }
        );
    }
}

let omar = new Student("Omar", 100);
let anas = new Student("Anas", 90);
let hager = new Student("Hager", 95);
let sarah = new Student("Sarah", 85);

let students = [omar, anas, hager, sarah];

students.forEach((student) => {
    student.appendStudent();
});

if (argv[2]) {
    let operation = argv[2].toLowerCase();

    switch (operation) {
        case "add":
            if (!argv[3] || !argv[4]) {
                console.log(
                    "Missing or wrong arguments, to add new student provide the name followed by the grade"
                );
            } else {
                let newStudent = new Student(argv[3], parseInt(argv[4]));
                students.push(newStudent);
                students.forEach((student) => {
                    console.log(student);
                });
            }
            break;
        case "list":
            console.log(students);
            break;
        case "edit":
            if (!argv[3] || !argv[4])
                console.log(
                    "Missing or wrong arguments, to edit a student's data provide the id followed by the grade"
                );
            else if (argv[3] <= 0 || argv[3] > students.length) console.log("Please provide a valid id ");
            else if (argv[4] > 100) console.log("Please provide a valid grade (0 to 100) ");
            else {
                let id = argv[3] - 1;
                students[id].grade = parseInt(argv[4]);

                console.log(students[id]);
            }
            break;
        case "delete":
            if (!argv[3])
                console.log("Missing or wrong arguments, to delete a student's data provide the id");
            else if (argv[3] <= 0 || argv[3] > students.length) console.log("Please provide a valid id ");
            else {
                dId = argv[3] - 1;
                students.splice(dId, 1);
                console.log(students);
                break;
            }
        case "sum":
            let totalGrades = 0;
            students.forEach((student) => {
                totalGrades += student.grade;
            });
            console.log(`Total grades of the class is ${totalGrades}`);
            break;

        default:
            console.log(
                "wrong operation. please provide an operation [add, list, edit, delete, sum], e.g node index add"
            );
            break;
    }
} else {
    console.log(
        "Missing or wrong arguments, please provide an operation [add, list, edit, delete, sum], e.g node index add"
    );
}
