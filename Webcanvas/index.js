const canvas = document.getElementById('hole');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
   
})



   
  

const mesto = {
    x : undefined,
    y : undefined,
};
let x;
let ifpressed = false;
window.addEventListener("mousedown",function(e){
   
     ifpressed = true;
 
    //animate();
})

window.addEventListener("mouseup",function(e){
   
     ifpressed = false;
 
})



 canvas.addEventListener("mousemove",function(e){
   if(ifpressed){
    mesto.x = e.pageX
    mesto.y = e.pageY
   }
    
})


 

setTimeout(() => {
            x = mesto.x;
            console.log(x)
        }, 10000 / 1);



function draw(x,y){
    let i = 0
    while (i <= 5){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.rect(x + i*4 ,y + i*4,2,2);
        ctx.rect(x + i*4 ,y + -(i*4),2,2);

        ctx.rect(x + -(i*4) ,y + i*4,2,2);
        ctx.rect(x + -(i*4) ,y + -(i*4),2,2);

        ctx.rect(x + i*6 ,y,2,2);
        ctx.rect(x +  -(i*6) ,y,2,2);

        ctx.rect(x,y + i*6 ,2,2);
        ctx.rect(x,y +  -(i*6) ,2,2);
         ctx.fill();
         console.log("hi");
        
        i++;
         
    }
}


function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height); 
    draw(mesto.x,mesto.y);

    
       
    setTimeout(() => {
            requestAnimationFrame(animate);
            x = mesto.x;
        }, 1000 / 75);
         
    
     
    
}


animate();