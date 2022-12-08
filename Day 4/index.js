/*********************************************** TASK 1 ***********************************************/

function startClock() {
    alert("Clock Started");
    setInterval(function (){
        var time = new Date().toLocaleTimeString();
        console.log(time);
        
    }, 1000);
}

/*********************************************** TASK 2 ***********************************************/
function openWindow() {
    window.open("https://www.linkedin.com");
}
/*********************************************** TASK 3 ***********************************************/
var popUpWin;

function openPopUp() {
    setTimeout(() => {
        const windowFeatures = "left=100,top=100,width=320,height=320,popup=yes";
        popUpWin = window.open("", "googleWindow",windowFeatures);
        popUpWin.document.write("Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt sit eos enim ratione perferendis non dolores omnis. Tenetur mollitia aspernatur quod in incidunt sapiente, quasi quis aperiam tempore, delectus repellat animi sint voluptates, eligendi porro iure iusto. Blanditiis ullam doloremque commodi quo perspiciatis, ratione neque debitis expedita necessitatibus ipsum esse magni ad libero quaerat reprehenderit sunt id temporibus nulla. Accusamus vero architecto est voluptatem corrupti qui reprehenderit consequatur. Alias, quaerat reprehenderit tempora quasi ipsum animi ab id error nisi iusto quam, aliquam eos provident consequuntur sint rerum sunt dolorem laborum ratione praesentium veniam eum. Eum aspernatur deserunt ad perferendis!")       
    }, 3000);

}


function closePopUp() {
    popUpWin.close();
}

/*********************************************** TASK 4 ***********************************************/

function hiOnScroll(){
    if(window.scrollY > 777)
        alert("Hey!");

    console.log(window.scrollY);
}

/*********************************************** TASK 5 ***********************************************/
// alert("To sign up for our website, enter your full name and email");

// var userName = prompt("Enter your full name");
// var nameCheck = /^[a-zA-Z/s]{4,}$/
// var userMail = prompt("Enter your email");
// var mailCheck = /[a-zA-Z0-9]{5,15}@[a-z]{4,10}\.[a-z]{3,5}\.eg$/

// while(!nameCheck.test(userName)){
//     alert(nameCheck.test(userName));
//     userName = prompt("Enter your full name");
// }

// while(!mailCheck.test(userMail)){
//     alert(nameCheck.test(userMail));
//     userMail = prompt("Enter your email");
// }
// console.log(mailCheck.test(userMail));
