const canvas = document.getElementById('hole');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = 3 * window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
   
})

const ParticlesArray = [];
const ObjectsArray = [];
let mouse = {
    x : canvas.width/2,
    y : canvas.width/2,
};
let x;
let ifpressed = false;
window.addEventListener("click",function(e){
   canvas.requestPointerLock({
    unadjustedMovement: true,})
    

  
console.log(ParticlesArray);
   // animate();
})
window.addEventListener("mousedown",function(e){
   
     ifpressed = true;
 
})
window.addEventListener("mouseup",function(e){
   
     ifpressed = false;
 
})


 canvas.addEventListener("mousemove",function(e){
    mouse.x += e.movementX;
    mouse.y += e.movementY;
 
   if(ifpressed){
     for (let i = 0;i < 20;i++){
        ParticlesArray.push(new Particle())
    }
   }
    
})


   function drawsky(){
        ctx.beginPath();
        ctx.fillStyle = 'lightblue'
        ctx.rect(0,0,canvas.width,canvas.height - (mouse.y * 2))
        ctx.fill();
    }

    function crosshair(){
        ctx.beginPath();
        ctx.fillStyle = 'red'
        let i = 2;
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
        this.x = Math.random() * (canvas.width - (-canvas.width)) + (-canvas.width);
        this.y = Math.random() * (canvas.height) + 50;
        this.close = Math.random() * 200 + 30;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.rect(this.x,this.y,this.close,this.close + 10);
        ctx.fill();
    }
    update(){
        this.x = mouse.x - canvas.width
        this.y = mouse.y - canvas.height
    
    }

    drawObject(){
        ctx.beginPath();
        ctx.fillStyle = 'grey'
        ctx.rect(canvas.width + this.x - mouse.x, canvas.height - (15+ canvas.height/(this.close **2)) - (Math.sqrt(this.close)*2) - mouse.y *2 ,this.close, this.close + this.close/7)
        ctx.fill();
}

}

    //function 
   // }




class Particle {
    constructor(){
        this.x = mouse.x 
        this.y = mouse.y
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
for (let i = 0;i < 10;i++){
    ObjectsArray.push(new Targets())
}

function handleObjects(){
    for (let i = 0; i < ObjectsArray.length;i++){
         //ObjectsArray[i].update(); 
          ObjectsArray[i].drawObject();
     
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
    //drawObject();
  
    //ctx.fillStyle = 'rgba(0,0,0,0.11)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    handleObjects();
    crosshair();
    setTimeout(() => {
            //console.log(ObjectsArray)
            requestAnimationFrame(animate);
            x = mouse.x;
        }, 1000 / 244);
         
    
     
    
}


animate();