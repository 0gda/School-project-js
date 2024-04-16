const canvas = document.getElementById('hole');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    generate(20)
})

function generate(amount){
    for(let i = 0; i < amount;){
     ctx.arc(i,i,50,0,360);
    }
} ;<body></body>