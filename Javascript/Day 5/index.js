/*********************************************** TASK 1 ***********************************************/

// var div1Id = document.getElementById("task1divid");
// console.log(div1Id);
// var div1Class = document.getElementsByClassName("task1divclass");
// console.log(div1Class);
// var div1Name= document.getElementsByName("task1div");
// console.log(div1Name);
// var div1TagName = document.getElementsByTagName("div");
// console.log(div1TagName);
// var div1ByQuery = document.querySelector("#task1divid");
// console.log(div1ByQuery);


/*********************************************** TASK 2 ***********************************************/

    // var udyrStances = document.querySelectorAll(".udyrStance");
    // // for(var i = 0; i < udyrStances.length; i++){
    // //     udyrStances[i].addEventListener("mouseover", function() {
    // //         udyrStances[i].style.width = "200%"
    // //         console.log("you clicked region number " + i);
    // //     });
    // // }

    // // for(var i = 0; i < udyrStances.length; i++){
    // //     udyrStances[i].addEventListener("mouseover", function(){
    // //         // udyrStances[i].style.width = "200%"
    // //         console.log("you clicked region number " + udyrStances[i]);
    // //     });
    // // }
    // udyrStances.forEach(stance => {
    //     stance.addEventListener("mouseover", function(){
    //         stance.style.width = "400px";
    //     });

    //     stance.addEventListener("mouseleave", function(){
    //         stance.style.width = "315px";
    //     });
    // });


/*********************************************** TASK 3 ***********************************************/

// var createDivBtn = document.querySelector(".createDivBtn");

// createDivBtn.addEventListener("click", function(){
//     console.log("Hi");
//     var newDiv = document.createElement('div');
//     var newDivParagraph = document.createElement('p');
//     newDivParagraph.innerText = "Hi I'm a new udyr stance";
//     var newDivImg = document.createElement('img');
//     var imgName = "udyr" + Math.ceil(Math.random() * 4) + ".jpeg"
//     newDivImg.setAttribute("src", imgName);
//     newDiv.appendChild(newDivParagraph);
//     newDiv.appendChild(newDivImg);
//     document.getElementsByTagName('body')[0].appendChild(newDiv);

// });

/*********************************************** TASK 4 ***********************************************/

var inputs = document.querySelectorAll("input");
var submit = document.querySelector(".submit-btn");

inputs.forEach(input => {
    input.addEventListener("focus", function(){
        input.style.border="1px solid red";
    });
})

submit.addEventListener("click", function(e){
    e.preventDefault();
    var userName = document.querySelector("#full-name").value;
    console.log(userName);
    var userMail = document.querySelector("#email").value;
    console.log(userMail);
    var userCity = document.querySelector("#city").value;
    console.log(userCity);
    var userPassword = document.querySelector("#password").value;
    console.log(userPassword);
});


/*********************************************** TASK 5 ***********************************************/

var legends = ["yasuo.jpeg", "sett.jpg", "viego.jpg", "sylas.jpg"];
var legend = document.querySelector(".legend");
legend.style.width = "500px";   
var imgCounter = 0;

var nextBtn = document.querySelector(".next");
var previousBtn = document.querySelector(".previous");
var showBtn = document.querySelector(".show-all");
var stopBtn = document.querySelector(".stop");

nextBtn.addEventListener("click", function() {
    imgCounter++;
    if(imgCounter > legends.length - 1)
        imgCounter = 0;
    legend.setAttribute("src", legends[imgCounter]);
});

previousBtn.addEventListener("click", function() {
    imgCounter--;
    if(imgCounter < 0)
        imgCounter = legends.length - 1;
    legend.setAttribute("src", legends[imgCounter]);
});

showBtn.addEventListener("click", function() {
    slider = setInterval(function () {
        imgCounter++;
        if(imgCounter > legends.length - 1)
            imgCounter = 0;
        legend.setAttribute("src", legends[imgCounter]);    
    }, 2000);
});

stopBtn.addEventListener("click", function() {
    clearInterval(slider);
});