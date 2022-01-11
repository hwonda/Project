
animateCircle = function() {
    let ctx = document.querySelector('#myCanvas').getContext('2d');
    let end = Math.PI * 1.5;
    for (var i = 0; i < 100; i++) {
      draw(i);
    };
  
    function draw(delay) {
      setTimeout(function() {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.arc(250, 250, 200, Math.PI * -0.5, Math.PI * 3.5/100*delay,true);
        ctx.stroke();
      }, delay * 10);
    }
  };