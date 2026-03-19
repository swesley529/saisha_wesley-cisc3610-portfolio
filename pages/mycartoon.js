//my javascript code for my website
window.onload = function () {
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//background 
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//sun
ctx.beginPath();
ctx.arc(112, 64, 50, 0, 2 * Math.PI);
ctx.stroke();

//ground
ctx.fillStyle = "rgb(101, 67, 33)";
ctx.fillRect(0, 270, 800, 200);
ctx.stroke();

};
