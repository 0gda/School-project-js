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





function draw(){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(mesto.x,mesto.y,10,0,360);
        ctx.fill();
        
        
    
}


function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height); 
    draw();

    
       
    setTimeout(() => {
            requestAnimationFrame(animate);
           
        }, 1000 / 500);
         
    
     
    
}


animate();