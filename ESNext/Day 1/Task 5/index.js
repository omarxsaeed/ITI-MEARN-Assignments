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
// console.log(studentOmar);
// console.log(studentAnas);
// console.log(studentHager);
// console.log(studentSarah);

let studentsList = new Map();
studentsList.set(studentOmar.studentName, studentOmar.courses);
studentsList.set(studentAnas.studentName, studentAnas.courses);
studentsList.set(studentHager.studentName, studentHager.courses);
studentsList.set(studentSarah.studentName, studentSarah.courses);

console.log(studentsList);

for (const [name, courses] of studentsList) {
    console.log(`Student: ${name}`);

    for (const course of courses) {
        console.log(
            `Student ${name} has the following grades ${course.grade} for the ${course.courseName} course `
        );
    }
}

console.log("---------------------------------------------");

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
