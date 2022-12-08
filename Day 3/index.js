/*********************************************** TASK 1 ***********************************************/

// var countries = ["Austria", "USA", "UK", "Germany", "Sweden", "Luxembourg", "Switzerland", "Netherlands", "Denmark", "Italy"];
// alert("You should visit: " + countries[Math.floor(Math.random()*10)]);

/*********************************************** TASK 2 ***********************************************/
// var date = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// alert(date.toLocaleDateString('ar-EG', options));

/*********************************************** TASK 3 ***********************************************/

// var userMail = prompt("Here's a fun valid email checker, Please enter your email.");
// if(userMail.includes("@"))
//     alert("That's a valid mail!");
// else
//     alert("Sorry, that's an invalid mail please try again");

/*********************************************** TASK 4 ***********************************************/

// var userBirthDate = prompt("Please enter your birthday in this format (DD - MM - YYYY)");

// function ensureDateFormat(birthDate) {
//     isCorrectFormat = birthDate.length == 10 && (birthDate[2] == "-" && birthDate[5] == "-")
//     console.log(isCorrectFormat)
//     while(!isCorrectFormat){

//         alert("Wrong date format, please use the following format (DD - MM - YYYY)");
//         userBirthDate = prompt("Please enter your birthday in this format (DD - MM - YYYY)");
//         isCorrectFormat = userBirthDate.length == 10 && (userBirthDate[2] == "-" && userBirthDate[5] == "-")
//     }

//     userDMY = userBirthDate.split("-");
//     userYMD = userDMY.reverse();
//     alert("Your birthday is " + createDateObject(userYMD));
// }

// function createDateObject(birthDate){
//     userBirthDateObject = new Date(birthDate);
//     return userBirthDateObject;
// }

// ensureDateFormat(userBirthDate);

/*********************************************** TASK 5 ***********************************************/

function studentsInfo(){
    var students = [
        {
            name: "Negm",
            degree: 100
        },

        {
            name: "Omar",
            degree: 95
        },

        {
            name: "Anas",
            degree: 90
        },

        {
            name: "Sarah",
            degree: 85
        },

        {
            name: "Hager",
            degree: 80
        },
    ]

    printStudents(students);

    getTopStudents(students);
    var newStudent = new Student("Islam", 75);
    // console.log(newStudent)
    // console.log(typeof students[1].degree)
    // addStudent( {
    //     name: "Islam",
    //     degree: 75
    // }, students);
    addStudent(newStudent, students);
    // removeStudent(students);
}

function printStudents(students) {
    for(var i = 0; i < students.length; i++){
        console.log("Student: ", students[i].name, " has a degree of ", students[i].degree);
    }
}

function getTopStudents(students){
    console.log("Top students are:-");
    for(var i = 0; i < students.length; i++){
        if(students[i].degree >= 90 && students[i].degree <= 100 )
            console.log(students[i].name)
    }
}

function Student(name, degree){
    this.name = name;
    this.degree = degree;
}

function addStudent(student, students) {
    students.push(student);
    console.log(students);
}

function removeStudent(students){
    students.pop();
    console.log(students);
}

studentsInfo()