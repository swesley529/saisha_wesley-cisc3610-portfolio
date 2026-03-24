//my javascript code for my website
window.onload = function () {
  const canvas = document.getElementById("myCanvas");

canvas.style.border = "3px solid black";

canvas.width = "1500";
canvas.height = "800";

const ctx = canvas.getContext("2d");

 ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

//sun
  ctx.beginPath();
  ctx.arc(212, 64, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "yellow";
  ctx.fill();
  ctx.stroke();

//ground
  ctx.fillStyle = "rgb(101, 67, 33)";
  ctx.fillRect(0, canvas.height - 200, canvas.width, 200);

  //house
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.fillRect(canvas.width/2 - 200, canvas.height - 500, 400, 300);

//roof
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(750, 200);
ctx.lineTo(500, 300);
ctx.lineTo(1000, 300);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

//windows
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(620, 350, 70, 70);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(820, 350, 70, 70);


//door
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.fillRect(720, 470, 70, 130);

//knob
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(780, 540, 7, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//grass
for (let i = 0; i < canvas.width; i += 20) {
  ctx.beginPath();
  ctx.strokeStyle = "green";

  ctx.moveTo(5 + i, 570);
  ctx.lineTo(0 + i, 600);
  ctx.lineTo(15 + i, 600);

  ctx.closePath();
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();
}




