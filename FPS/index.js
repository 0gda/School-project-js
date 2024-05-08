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
const ObjectsArray = [];
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


   function drawsky(){
        ctx.beginPath();
        ctx.fillStyle = 'lightblue'
        ctx.rect(0,0,canvas.width,canvas.height - mesto.y)
        ctx.fill();
    }

    function crosshair(){
        ctx.beginPath();
        ctx.fillStyle = 'red'
        let i = 0;
         while (i <= 5){
        ctx.rect(canvas.width / 2 + i*4 ,canvas.height /2 + i*4,2,2);
        ctx.rect(canvas.width / 2 + i*4 ,canvas.height /2 + -(i*4),2,2);

        ctx.rect(canvas.width / 2 + -(i*4) ,canvas.height /2 + i*4,2,2);
        ctx.rect(canvas.width / 2 + -(i*4) ,canvas.height /2 + -(i*4),2,2);
            i++;
        }
        ctx.fill();
    }
class Targets {
    constructor(){
        this.x = mesto.x
        this.y = mesto.y
        this.close = Math.random() * 50 + 1
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.rect(canvas.width - this.x,canvas.height - this.y -this.close,this.close,this.close + 10);
        ctx.fill();
    }
}



    function drawObject(){
        ctx.beginPath();
        ctx.fillStyle = 'grey'
        ctx.rect(canvas.width - mesto.x,canvas.height - mesto.y ,60, 70)
        ctx.fill();
    }


for (let i = 0;i < 5;i++){
    ObjectsArray.push(new Targets())
}

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


function handleObjects(){
    for (let i = 0; i < ObjectsArray.length;i++){
        ObjectsArray[i].draw();
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

    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    //Particle.draw(this.x,this.y);
    //Particle.update()
    
    drawsky();
    drawObject();
    crosshair();
    //ctx.fillStyle = 'rgba(0,0,0,0.11)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    handleObjects();
    setTimeout(() => {
            //console.log(ObjectsArray.length)
            requestAnimationFrame(animate);
            x = mesto.x;
        }, 1000 / 244);
         
    
     
    
}


animate();