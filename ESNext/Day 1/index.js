/************************************ TASK 1 ************************************/
let a = 10;
let b = 200;

console.log(`var a is: ${a}, var b is: ${b}`);

[a, b] = [b, a];

console.log(`var a is: ${a}, var b is: ${b}`);
/************************************ TASK 2 ************************************/
// var numStudents = prompt("What's the number of the students in a class");
let grades = [45, 56, 83, 91, 100, 66];
let maxGrade = Math.max(...grades);
let minGrade = Math.min(...grades);
console.log(maxGrade);
console.log(minGrade);

// var siz = Math.round(Math.random() * 10);

// let randGrades = Array.from(numStudents, () => Math.floor(Math.random() * 40));
// console.log(randGrades);
/************************************ TASK 3 ************************************/
let student = {
    name: "Omar",
    university: "Port Said University",
    faculty: "Engineering",
    finalGrade: "Good",
};

console.log(
    `${student.name} is a student in faculty of ${student.faculty} in university ${student.university} and his final grad is ${student.finalGrade}.`
);

/************************************ TASK 4 ************************************/
const africa = ["Masr", "Egypt", "Sudan", "Somal", "Libya", "Egypt", "Algeria", "Morocco", "Egypt"];
const asia = ["Egypt", "China", "India", "Pakistan", "Japan", "Turkey", "South Korea"];

const africanCountries = new Set(africa);
const asianCountries = new Set(asia);
africanCountries.add("Egypt");
console.log(...africanCountries);
for (const country of africanCountries) {
    console.log(country);
}

console.log(
    `Number of repeated items in african list of countries is: ${africa.length - africanCountries.size}`
);

Set.prototype.difference = function (rhset) {
    let diffSet = new Set();
    for (element of this) {
        if (!rhset.has(element)) {
            diffSet.add(element);
        }
    }
    return diffSet;
};

Set.prototype.union = function (rhset) {
    let unionSet = new Set([...this, ...rhset]);
    return unionSet;
};

diffCountries = africanCountries.difference(asianCountries);
unionSet = africanCountries.union(asianCountries);
console.log(diffCountries);
console.log(unionSet);
/************************************ TASK 5 ************************************/

function createStudent(name) {
    possibleGrades = ["Excellent", "V. Good", "Good", "Acceptable", "Fail"];
    student = {
        studentName: name,
        courses: [
            {
                courseName: "JavaScript",
                grade: possibleGrades[Math.round(Math.random() * 4)],
            },
            {
                courseName: "ReactJS",
                grade: possibleGrades[Math.round(Math.random() * 4)],
            },
            {
                courseName: "AngularJS",
                grade: possibleGrades[Math.round(Math.random() * 4)],
            },
            {
                courseName: "NodeJS",
                grade: possibleGrades[Math.round(Math.random() * 4)],
            },
        ],
    };
    return student;
}

let studentOmar = createStudent("Omar");
let studentAnas = createStudent("Anas");
let studentHager = createStudent("Hager");
let studentSarah = createStudent("Sarah");
console.log(studentOmar);
console.log(studentAnas);
console.log(studentHager);
console.log(studentSarah);

let studentsList = new Map();
studentsList.set(studentOmar.studentName, studentOmar.courses);
studentsList.set(studentAnas.studentName, studentAnas.courses);
studentsList.set(studentHager.studentName, studentHager.courses);
studentsList.set(studentSarah.studentName, studentSarah.courses);

console.log(studentsList);

// for (const [name, courses] of studentsList) {
//     for (const course of courses) {
//         console.log(
//             `Student ${name} has the following grades ${course.grade} for the ${course.courseName} course `
//         );
//     }
// }

// console.log("---------------------------------------------");

// for (let i = 0; i < studentsList.size; i++) {
//     // console.log(studentsList.values());
//     for (let j = 0; j < studentsList.keys().length; j++) {
//         // console.log(
//         //     `Student ${studentsList.keys().next()} has the following grades ${studentsList.keys().next()}`
//         // );
//         console.log("Hi");
//     }
// }

studentsList.forEach((courses, student) => {
    console.log(`Student: ${student}`);
    courses.forEach((course) => {
        console.log(`The student scored ${course.grade} in the course: ${course.courseName} `);
    });
});

let studentsDropDown = document.getElementById("students");

studentsList.forEach((courses, student) => {
    let studentOption = document.createElement("option");
    studentOption.innerText = student;
    studentOption.value = student;
    // studentOption.addEventListener("select", function () {
    //     console.log("Hey");
    // });
    studentsDropDown.appendChild(studentOption);
});

studentsDropDown.addEventListener("change", (e) => {
    let studentCourses = studentsList.get(e.target.value);
    studentCourses.forEach((course) => {
        console.log(`${studentsDropDown.value} scored ${course.grade} in the course: ${course.courseName} `);
    });
});
