//my javascript code for my website
window.onload = function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

//background 
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
  ctx.fillRect(0, 800, 800, 300);
  ctx.stroke();

};
