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
window.addEventListener("click",function(e){
   
     ifpressed = true;

   console.log(ParticlesArray.velocityX);
       // while(ParticlesArray.length < 600){
             for (let i = 0;i < 100;i++){
             ParticlesArray.push(new Particle())
            }
       // }
   

   // animate();
})

window.addEventListener("mouseup",function(e){
   
     ifpressed = false;
 
})


 canvas.addEventListener("mousemove",function(e){
    mesto.x = e.pageX
    mesto.y = e.pageY 
  
    if(ifpressed){
       
    }
     
   
    
})

class Hole{
    constructor(){
        this.mass = 100;
        this.size = 50;
        this.x = canvas.width/2;
        this.y = canvas.height/2;
    }
    draw(){
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,360);
        ctx.fill();
    }
}

let hole = new Hole;


class Particle {
    constructor(){
        this.hole = hole;
        this.x = Math.random() < 0.5 ? 0 : canvas.width;
        this.y = Math.random() < 0.5 ? 0 : canvas.height;
        this.velocityX = Math.random() * 50 - 50 ;
        this.velocityY = Math.random() * 50 - 50 ;;
        this.size = Math.random() * 10 + 5
        this.time = 60;
   
        /*
        this.velocityX = (this.hole.mass * this.size) / (this.hole.x - this.x)
        this.velocityY = (this.hole.mass * this.size) / (this.hole.y - this.y)

        
        this.speedX = Math.random() * 6 -3;
        this.speedY = Math.random() * 6 -3;
        */
    }
    update(){
        this.DistanceX = this.hole.x - this.x;
        this.DistanceY = this.hole.y - this.y;
        this.distanceSq = this.DistanceX**2 + this.DistanceY**2;
        this.distance = Math.sqrt(this.distanceSq);
        this.force = (6 * this.hole.mass * this.size) / this.distance;
        this.accelerationX = (this.force * this.DistanceX) / this.distance;
        this.accelerationY = (this.force * this.DistanceY) / this.distance;
        this.velocityX += this.accelerationX
        this.velocityY += this.accelerationY
        this.x += this.velocityX;
        this.y += this.velocityY;
        if (this.time > 0.2) this.time -= 0.1;
    }

    draw(){
    let i = 0
    while (i <= 5){
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.01)';
        //ctx.rect(this.x + i*4 ,this.y + i*4,this.size,this.size);
        ctx.arc(this.x,this.y,5,0,360);
         ctx.fill();
         //console.log("hi");
        console.log(this.velocityY)
        i++;
         
    }
}
}



function handleParticles(hole){
    for (let i = 0;i < ParticlesArray.length;i++){
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
        
        if (ParticlesArray[i].x - hole.x == hole.size || ParticlesArray[i].time <= 1 || (ParticlesArray[i].distance - hole.x >= hole.mass && ParticlesArray[i].time <= 55)  ){
           ParticlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {

    //ctx.clearRect(0, 0, canvas.width, canvas.height); 
    //Particle.draw(this.x,this.y);
    //Particle.update()
    
  //  ctx.fillStyle = 'rgba(0,0,0,0.091)';
   // ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles(hole);
    hole.draw();
       
    setTimeout(() => {
            console.log(ParticlesArray.length)
            requestAnimationFrame(animate);
           
        }, 1000 / 130);
         
    
     
    
}

function eraseSlowly(){
    ctx.fillStyle = 'rgba(0,0,0,0.091)';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   setTimeout(() => {
            console.log(ParticlesArray.length)
            requestAnimationFrame(eraseSlowly);
           
        }, 1000 / 1);
}
eraseSlowly();

animate();