const canvas = document.getElementById('text');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'black';
   
})

window.addEventListener('load',function(){
    ctx.fillStyle = 'white';
    ctx.font = `${canvas.width/20}px Monospace`;
    ctx.textAlign = 'center';
    ctx.fillText("Black Hole Generator",canvas.width/2,canvas.height/7, );
    ctx.fill();
})