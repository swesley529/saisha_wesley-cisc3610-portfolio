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
  ctx.arc(112, 64, 50, 0, 2 * Math.PI);
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
ctx.moveTo(400, 200);
ctx.lineTo(180, 300);
ctx.lineTo(620, 300);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

//windows
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(250, 350, 70, 70);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(480, 350, 70, 70);


//door
ctx.beginPath();
ctx.fillStyle = "pink";
ctx.fillRect(370, 470, 70, 130);

//knob
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(422, 540, 7, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();


};
