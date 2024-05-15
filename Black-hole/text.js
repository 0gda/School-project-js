
    //m12 project,This code is not completely mine, tutorial in Particle Text with Vanilla JavaScript @ Franks laboratory
    
    
    const canvas = document.getElementById('text');
    const ctx = canvas.getContext('2d', {
        willReadFrequently: true
    });
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'black';
    
    })

    let clicked = false;

    class Hole{
    constructor(){
        this.mass = 50;
        this.size = 20;
        this.x = canvas.width/2;
        this.y = canvas.height/2;
    }
    draw(){
        ctx.fillStyle = 'rgba(0,0,0,0.51)';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,360);
        ctx.fill();
    }
}
let hole = new Hole;
const Textparticles = [];
    class Particle {
        constructor(converter, x, y, color) {
            this.hole = hole;
            this.converter = converter;
            this.x = Math.random() * this.converter.canvasWidth;
            this.y = Math.random() * this.converter.canvasHeight;
            this.color = color;
            this.originX = x;
            this.originY = y;
            this.size = this.converter.psize - 2; // the - is the gap size
            this.DistanceX = 0;
            this.DistanceY = 0;
            this.VelocityX = 0;
            this.VelocityY = 0;
            this.force = 0;
            this.direction = 0;
            this.distance = 0;
            this.resistance = Math.random() * 0.5 + 0.15;
            this.rewind = Math.random() * 0.2 + 0.1;
        }
        draw() {
            this.converter.ctx.fillStyle = this.color;
            //optimization
            this.converter.ctx.fillRect(this.x, this.y, this.size, this.size)
        }
        
        update() {
            this.DistanceX = this.converter.mouse.x - this.x;
            this.distanceY = this.converter.mouse.y - this.y;
            this.distance = this.DistanceX ** 2 + this.distanceY ** 2;
            this.force = -this.converter.mouse.radius / this.distance;
            //console.log(this.distance)
            if (this.distance < this.converter.mouse.radius) {
                this.direction = Math.atan2(this.distanceY, this.DistanceX)
                this.VelocityX += this.force * Math.cos(this.direction)
                this.VelocityY += this.force * Math.sin(this.direction)
            }
            this.x += (this.VelocityX *= this.resistance) + (this.originX - this.x) * this.rewind;
            this.y += (this.VelocityY *= this.resistance) + (this.originY - this.y) * this.rewind;
        }
        updateHole(){
        this.DistanceX = this.hole.x - this.x;
        this.DistanceY = this.hole.y - this.y;
        this.distancesq = this.DistanceX**2 + this.DistanceY**2;
        this.distance = Math.sqrt(this.distancesq);
        this.force = (6 * this.hole.mass * this.size) / this.distance;
        this.accelerationX = (this.force * this.DistanceX) / this.distance;
        this.accelerationY = (this.force * this.DistanceY) / this.distance;
        this.VelocityX += this.accelerationX
        this.VelocityY += this.accelerationY
        this.x += this.VelocityX;
        this.y += this.VelocityY;
        if (this.time > 0.2) this.time -= 0.1;
        }
    }
    class Effect {
        constructor(ctx, canvasWidth, canvasHeight) {
            this.ctx = ctx;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.X = this.canvasWidth / 2;
            this.Y = this.canvasHeight / 4;
            this.size = this.canvasWidth / 15;
            this.lineH = this.size * 0.8
            this.maxWidth = this.canvasWidth * 0.6
            //
            this.particles = [];
            this.psize = 3;
            this.mouse = {
                //large radius value for performance, DONT FORGET
                radius: canvas.width * 3,
                x: 0,
                y: 0,
            }
            window.addEventListener('mousemove', e => {
                this.mouse.x = e.clientX
                this.mouse.y = e.clientY
                // console.log(this.mouse);
            });
    
        }
        TextWrapper(text) {
            this.ctx.fillStyle = 'magenta';
            this.ctx.font = `${this.size * 1.2}px impact`;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(text, this.X, this.Y)
            this.Convert();
        }
        Render() {
            this.particles.forEach(particle => {
                if(clicked){
                    particle.updateHole();
                    particle.draw();
                }else{
                particle.update();
                particle.draw(); 
                }
                
            });
        }
        resize(width, height) {
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.X = this.canvasWidth / 2;
            this.Y = this.canvasHeight / 4;
            this.size = this.canvasWidth / 15;
            this.maxWidth = this.canvasWidth * 0.6;
            this.mouse.radius = canvas.width * 3;
        }
        Convert() {
            //Textparticles = [];
            const pixels = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            //console.log(pixels);
            for (let y = 0; y < this.canvasHeight; y += this.psize) {
                for (let x = 0; x < this.canvasWidth; x += this.psize) {
                    const i = (y * this.canvasWidth + x) * 4;//4 because rgbA
                    const alpha = pixels[i + 3];
                    if (alpha > 0) {
                        const r = pixels[i];
                        const g = pixels[i + 1];
                        const b = pixels[i + 2];
                        const color = 'rgb(' + r + ',' + g + ',' + b + ')';
                        Textparticles.push(new Particle(this, x, y, color));
                    }
                }
            }
            //console.log(this.particles)
        }
    }
    const converter = new Effect(ctx, canvas.width, canvas.height);
    converter.TextWrapper('black hole generator');
    
    
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        converter.resize(canvas.width, canvas.height);
        converter.TextWrapper('black hole generator');
    })
    





//if(clicked){

const ParticlesArray = [];
const mesto = {
    x : undefined,
    y : undefined,
};
window.addEventListener("click",function(){
    clicked = true;
       // while(ParticlesArray.length < 600){
             for (let i = 0;i < 10;i++){
             ParticlesArray.push(new Particles())
            }
       // }
   

   // animate();
})



 canvas.addEventListener("mousemove",function(e){
    mesto.x = e.pageX
    mesto.y = e.pageY 
})





class Particles {
    constructor(){
        this.hole = hole;
        this.x = Math.random() < 0.5 ? 0 : canvas.width;
        this.y = Math.random() * canvas.height + 1 ;
        this.VelocityX = Math.random() * 10 - 10 ;
        this.velocityY = Math.random() * 10 - 10 ;
        this.size = Math.random() * 10 + 5
        this.time = 160;
   
        /*
        this.VelocityX = (this.hole.mass * this.size) / (this.hole.x - this.x)
        this.velocityY = (this.hole.mass * this.size) / (this.hole.y - this.y)

        
        this.speedX = Math.random() * 6 -3;
        this.speedY = Math.random() * 6 -3;
        */
    }
    update(){
        this.DistanceX = this.hole.x - this.x;
        this.DistanceY = this.hole.y - this.y;
        this.distancesq = this.DistanceX**2 + this.DistanceY**2;
        this.distance = Math.sqrt(this.distancesq);
        this.force = (6 * this.hole.mass * this.size) / this.distance;
        this.accelerationX = (this.force * this.DistanceX) / this.distance;
        this.accelerationY = (this.force * this.DistanceY) / this.distance;
        this.VelocityX += this.accelerationX
        this.velocityY += this.accelerationY
        this.x += this.VelocityX;
        this.y += this.velocityY;
        if (this.time > 0.2) this.time -= 0.1;
    }

    draw(){
    let i = 0
    while (i <= 5){
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,1)';
        //ctx.rect(this.x + i*4 ,this.y + i*4,this.size,this.size);
        ctx.arc(this.x,this.y,5,0,360);
         ctx.fill();
         //console.log("hi");
       // console.log(this.velocityY)
        i++;
         
    }
}
}



function handleParticles(hole){
    for (let i = 0;i < ParticlesArray.length;i++){
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
        
        if (ParticlesArray[i].x - hole.x == hole.size || ParticlesArray[i].time <= 1 || (ParticlesArray[i].distance - hole.x >= hole.mass && ParticlesArray[i].time <= 20)  ){
           ParticlesArray.splice(i, 1);
            i--;
        }
    }
}
function RenderParticles(hole) {
    for (let i = 0;i < Textparticles.length;i++){
                if(clicked){
                    Textparticles[i].updateHole();
                    Textparticles[i].draw();
                    if (Textparticles[i].distance < hole.size + 50){
                                        Textparticles.splice(i, 1);
                                        i--;
                                    }
                }else{
                Textparticles[i].update();
                Textparticles[i].draw(); 
                }
                
                 
                
            };
        }
        
function animate() {

    //ctx.clearRect(0, 0, canvas.width, canvas.height); 
    //Particle.draw(this.x,this.y);
    //Particle.update()
    
    handleParticles(hole);
    RenderParticles(hole);
    //hole.draw();
    //converter.Render();
    console.log(ParticlesArray.length)
    requestAnimationFrame(animate);
        
}

function eraseSlowly(){
    ctx.fillStyle = 'rgba(0,0,0,0.041)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
   //setTimeout(() => {
           // console.log(ParticlesArray.length)
            requestAnimationFrame(eraseSlowly);
           
     //   }, 1000 / 1);
}
eraseSlowly();

animate();
//}