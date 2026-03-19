//my javascript code for my website
const canvs = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//background 
ctx.background = new THREE.Color("skyblue");

//sun
ctx.beginPath();
ctx.arc(112, 64, 50, 0, 2 * Math.PI);
ctx.stroke();

//ground
ctx.fillStyle = "rbg(101, 67, 33)";
ctx.fillRect(0, 270, 800, 200);
ctx.stroke();


