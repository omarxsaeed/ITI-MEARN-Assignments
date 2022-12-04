const canvas = document.getElementById("canvas");
const drawBtn = document.getElementById("drawBtn");
const fillColor = document.getElementById("fillColor");

// Fill the whole width of the page.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

drawBtn.addEventListener("click", function () {
    for (var i = 0; i < Math.random() * 10; i++) {
        // ctx.beginPath();
        // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.beginPath();
        const x = Math.random() * window.innerWidth; // x coordinate
        const y = Math.random() * window.innerHeight; // y coordinate
        const radius = Math.random() * 50; // Arc radius
        const startAngle = 0; // Starting point on circle
        const endAngle = 2 * Math.PI; // End point on circle
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.strokeStyle = fillColor.value;
        ctx.fillStyle = hexToRGB(fillColor.value, Math.random());
        ctx.stroke();
        ctx.fill();
        // console.log(fillColor.value);
    }
});

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}
