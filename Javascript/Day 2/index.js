/*********************************************** TASK 1 ***********************************************/

// function weather1(temp) {
//     alert((temp >= 30 ? "Today's weather is hot" : "Today's weather is cold"));
// };

// userTemp = prompt("Enter today's temperature");
// weather1(userTemp);

/*********************************************** TASK 2 ***********************************************/

// function weather2(temp, feel) {
//     alert(  ((temp > 30 && temp > 30)) ? "Today's weather is hot" 
//             : ((temp < 25 && temp < 25)) ? "Today's weather is cold"
//             : "Today's weather is normal");
// };

// userTemp = prompt("Enter today's temperature");
// weather2(userTemp);

/*********************************************** TASK 3 ***********************************************/

// function tracksEligibility(facultyName){
//     switch(facultyName) {
//         case "FCI" : alert("You're eligible for Programming tracks"); break;
//         case "Engineering" : alert("You're eligible for Network and Embedded tracks"); break;
//         case "Commerce" : alert("You're eligible for ERP and Social media tracks"); break;
//         default : alert("You’re eligible to SW fundamentals track"); break;
//     }
// }

// var userFaculty = prompt("Enter the name of your faculty");
// tracksEligibility(userFaculty);

/*********************************************** TASK 4 ***********************************************/

// function printOdd(startNum, endNum) {
//     for(var i = startNum; i <= endNum; i++){
//         if(i % 2 != 0)
//             console.log(i, " is an odd number");
//     }
// }

// alert("Exercise to print odd numbers between two given numbers");
// userStartNum = prompt("Enter the first number");
// userEndNum = prompt("Enter the second number");

// printOdd(userStartNum, userEndNum);

/*********************************************** TASK 5 ***********************************************/

var userName = prompt("What's your name?");
console.log(typeof userName);

do {
    var userBirthYear = parseInt(prompt("What's your birth year?"));    
} while (!isFinite(userBirthYear));

var UserAge = new Date().getFullYear() - userBirthYear;

console.log("Name:", userName);
console.log("Birth year:", userBirthYear);
console.log("Age", UserAge);

/*********************************************** TASK 6 ***********************************************/

// alert("For this exercise we check a triangle is equilateral, isosceles or scalene. Enter the length of the three sides of a triangle.");
// triangleSide1 = prompt("Enter length of the first side");
// triangleSide2 = prompt("Enter length of the second side");
// triangleSide3 = prompt("Enter length of the third side");

// if(triangleSide1 == triangleSide2 && triangleSide1 == triangleSide3)
//     alert("The triangle is equilateral.");
    
// else if(triangleSide1 == triangleSide2 || triangleSide1 == triangleSide3)
//     alert("The triangle is isosceles.");

// else
//     alert("The triangle is scalene.")

/*********************************************** TASK 7 ***********************************************/

// var studentGrades = [60, 100, 10, 15, 85];

// var topGrade = 0;

// for(var i = 0; i < studentGrades.length; i++){
//     if(studentGrades[i] > topGrade)
//         topGrade = studentGrades[i];

//     if(studentGrades[i] < 60)
//         console.log(studentGrades[i]);
// }

// console.log(topGrade);

/*********************************************** BONUS TASK ***********************************************/

// alert("Help Alibaba solve the puzzle to get to the cave, Enter the 4 numbers of the puzzle.");

// puzzleNum1 = parseInt(prompt("Enter the first number."));
// puzzleNum2 = parseInt(prompt("Enter the second number."));
// puzzleNum3 = parseInt(prompt("Enter the third number."));
// puzzleNum4 = parseInt(prompt("Enter the fourth number."));
// // a _ b _ c = d (+, -, x)
// if(puzzleNum1 + puzzleNum2 - puzzleNum3 == puzzleNum4 || puzzleNum1 + puzzleNum2 * puzzleNum3 == puzzleNum4 || 
//     puzzleNum1 - puzzleNum2 + puzzleNum3 == puzzleNum4 || puzzleNum1 - puzzleNum2 * puzzleNum3 == puzzleNum4 ||
//     puzzleNum1 * puzzleNum2 + puzzleNum3 == puzzleNum4 || puzzleNum1 * puzzleNum2 - puzzleNum3 == puzzleNum4)
//     console.log("Output: Yes");
// else
//     console.log("Output: No");