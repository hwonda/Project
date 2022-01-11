const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.clientWidth;
const height = canvas.clientHeight;
const radius = width * 0.4;
const hour24 = [
  {start:0, end:30, display:'04'}
]

function degToRad(deg){
  return (Math.PI / 180) * deg;
}
function radToDeg(rad){
  return (180 / Math.PI) * rad;
}

function isInsideArc(x1,y1){
  var result = false;
  var x = width/2 - x1;
  var y = height/2 - y1;
  var my_len = Math.sqrt(Math.abs(x*x)+Math.abs(y*y));
  if(radius >= my_len){
    result = true;
  }
  var rad = radToDeg(Math.atan2(y,x)) + 180;
  return {result:result, degree:rad}
}

canvas.addEventListener('mousemove', function(event){
  var x1 = event.clientX - 100;
  var y1 = event.clientY - 100;
  var inn = isInsideArc(x1,y1);
  console.log(inn);
})

function drawCircle(){
  ctx.save();
  ctx.beginPath();
  ctx.arc(width/2,height/2,radius,degToRad(0),degToRad(360));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  console.log(width,radius)
}

drawCircle();
