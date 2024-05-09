const canvas = document.getElementById('hole');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
   
})

const ParticlesArray = [];
const mesto = {
    x : undefined,
    y : undefined,
};
let x;
let ifpressed = false;
window.addEventListener("mousedown",function(e){
   
     ifpressed = true;

  
console.log(ParticlesArray);
   // animate();
})

window.addEventListener("mouseup",function(e){
   
     ifpressed = false;
 
})


 canvas.addEventListener("mousemove",function(e){
    mesto.x = e.pageX
    mesto.y = e.pageY 
   if(ifpressed){
     for (let i = 0;i < 20;i++){
        ParticlesArray.push(new Particle())
    }
   }
    
})





class Particle {
    constructor(){
        this.x = mesto.x
        this.y = mesto.y
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 6 -3;
        this.speedY = Math.random() * 6 -3;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw(){
    let i = 0
    while (i <= 5){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.rect(this.x + i*4 ,this.y + i*4,this.size,this.size);
        ctx.rect(this.x + i*4 ,this.y + -(i*4),this.size,this.size);

        ctx.rect(this.x + -(i*4) ,this.y + i*4,this.size,this.size);
        ctx.rect(this.x + -(i*4) ,this.y + -(i*4),this.size,this.size);

        ctx.rect(this.x + i*6 ,this.y,this.size,this.size);
        ctx.rect(this.x +  -(i*6) ,this.y,this.size,this.size);

        ctx.rect(this.x,this.y + i*6 ,this.size,this.size);
        ctx.rect(this.x,this.y +  -(i*6) ,this.size,this.size);
         ctx.fill();
         //console.log("hi");
        
        i++;
         
    }
}
}




function handleParticles(){
    for (let i = 0;i < ParticlesArray.length;i++){
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
        if (ParticlesArray[i].size <= 0.2){
            ParticlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {

    //ctx.clearRect(0, 0, canvas.width, canvas.height); 
    //Particle.draw(this.x,this.y);
    //Particle.update()
    
    ctx.fillStyle = 'rgba(0,0,0,0.091)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
       
    setTimeout(() => {
            console.log(ParticlesArray.length)
            requestAnimationFrame(animate);
            x = mesto.x;
        }, 1000 / 244);
         
    
     
    
}


animate();