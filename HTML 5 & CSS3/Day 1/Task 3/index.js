const canvas = document.getElementById("canvas");
const drawBtn = document.getElementById("drawBtn");
const fillColor = document.getElementById("fillColor");
const chartValue = document.getElementById("chartValue");

// Fill the whole width of the page.
canvas.width = window.innerWidth;
canvas.height = "600";
const ctx = canvas.getContext("2d");

xAxis = 0;

drawBtn.addEventListener("click", function () {
    ctx.beginPath();
    ctx.fillStyle = fillColor.value;
    ctx.fillRect(xAxis, 600 - parseInt(chartValue.value), 75, parseInt(chartValue.value));
    console.log(xAxis, 600 - parseInt(chartValue.value), 75, parseInt(chartValue.value));
    ctx.closePath();
    xAxis += 100;
});
