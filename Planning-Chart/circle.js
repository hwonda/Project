const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const canWidth = canvas.clientWidth;        // 캔버스 너비
const canHeight = canvas.clientHeight;      // 캔버스 높이
const radius = canWidth * 0.4;              // 원 반지름
const hour24 = [                            // 원 위의 시간 표시
    {start:0, end:15, display:'08'},
    {start:15, end:30, display:'09'},
    {start:30, end:45, display:'10'},
    {start:45, end:60, display:'11'},
    {start:60, end:75, display:'12'},
    {start:75, end:90, display:'13'},
    {start:90, end:105, display:'14'},
    {start:105, end:120, display:'15'},
    {start:120, end:135, display:'16'},
    {start:135, end:150, display:'17'},
    {start:150, end:165, display:'18'},
    {start:165, end:180, display:'19'},
    {start:180, end:195, display:'20'},
    {start:195, end:210, display:'21'},
    {start:210, end:225, display:'22'},
    {start:225, end:240, display:'23'},
    {start:240, end:255, display:'24'},
    {start:255, end:270, display:'01'},
    {start:270, end:285, display:'02'},
    {start:285, end:300, display:'03'},
    {start:300, end:315, display:'04'},
    {start:315, end:330, display:'05'},
    {start:330, end:345, display:'06'},
    {start:345, end:360, display:'07'}
]

function degToRad(deg){                     // deg -> rad 값
  return (Math.PI / 180) * deg;
}
function radToDeg(rad){
  return (180 / Math.PI) * rad;
}

function isInsideArc(a,b){
    let result = false;
    let x = canWidth/2 - a;
    let y = canHeight/2 - b;
    let my_len = Math.sqrt(Math.abs(x*x)+Math.abs(y*y));
    if(radius >= my_len){
      result = true;
    }
    let rad = radToDeg(Math.atan2(y,x)) + 180;
    return {result:result, degree:rad};
}
  
canvas.addEventListener('click', function(event){
    let cir = canvas.getBoundingClientRect();
    let x1 = event.clientX - cir.left;
    let y1 = event.clientY - cir.top;
    let inn = isInsideArc(x1,y1);
    console.log(inn);
})

function drawCircle(){                  // 원 그리기
    ctx.save();
    ctx.beginPath();
    ctx.arc(canWidth/2,canHeight/2,radius,degToRad(0),degToRad(360));
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#fff"
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    console.log(canWidth,radius)
}

drawCircle();

hour24.forEach(function(data){
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=0.3;
    ctx.strokeStyle="#fff"
    ctx.moveTo(canWidth/2, canHeight/2);
    let x2 = Math.cos(degToRad(data.end+15)) * radius*1.1 + canWidth/2;
    let y2 = Math.sin(degToRad(data.end+15)) * radius*1.1 + canHeight/2;
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.fillText(data.display, x2-ctx.measureText(data.display).width/2,y2);    //선 그리기
    ctx.closePath();
    ctx.restore();
})


