// var snowflakesNum = Math.ceil(Math.random() * 25);
// console.log(snowflakesNum);
for (var i = 0; i < 25; i++) {
    var snowFlake = document.createElement("img");
    snowFlake.style.opacity = Math.random();
    snowFlake.src = "./snowflake.png";
    snowFlake.classList.add("snowflake");
    snowFlake.style.left = Math.random() * 100 + "vw";
    snowFlake.style.animationDelay = Math.random() + "s";
    snowFlake.style.animationDuration = Math.ceil(Math.random() * 10) + "s";
    document.body.appendChild(snowFlake);
}
