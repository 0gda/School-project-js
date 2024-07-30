//m12 project,This code is not completely mine, tutorial in Particle Text with Vanilla JavaScript @ Franks laboratory


const canvas = document.getElementById('text');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'black';
   
})
/*
window.addEventListener('load',function(){
    ctx.fillStyle = 'white';
    ctx.font = `${canvas.width/20}px Monospace`;
    ctx.textAlign = 'center';
    ctx.fillText("Black Hole Generator",canvas.width/2,canvas.height/7, );
    ctx.fill();
})
*/

class Particle {
    constructor(converter,x,y,color){
        this.converter = converter;
        this.x = Math.random() * this.converter.canvasWidth;
        this.y = 0;
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = this.converter.psize -2 ; // the - is the gap size
        this.distanceX = 0;
        this.distanceY = 0;
        this.VelocityX = 0;
        this.VelocityY = 0;
        this.force = 0;
        this.direction = 0;
        this.resistance = Math.random() * 3 + 0.10; 
        this.rewind = Math.random() * 0.1 + 0.005;
    }
    draw(){
        this.converter.ctx.fillStyle = this.color;
        //optimization
        this.converter.ctx.fillRect(this.originX,this.originY,this.size,this.size)
    }
    update(){
        this.x += this.originX - this.x
    }
}
class Effect {
    constructor(ctx,canvasWidth,canvasHeight){
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.X = this.canvasWidth /2;
        this.Y = this.canvasHeight /4;
        this.size = this.canvasWidth/15;
        this.lineH = this.size * 0.8
        this.maxWidth = this.canvasWidth * 0.6
        //
        this.particles = [];
        this.psize = 3;
        this.mouse = {
            //large radius value for performance, DONT FORGET
            radius: 10000,
            x: 0,
            y: 0,
        }
        window.addEventListener('mousemove',e => {
            this.mouse.x = e.clientX
            this.mouse.y = e.clientY
            console.log(this.mouse);
        });
        
    }
    TextWrapper(text){
        this.ctx.fillStyle = 'white';
        this.ctx.font = `${this.size *1.2 }px verdana`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(text,this.X,this.Y)
        this.Convert();
    }
    Render(){
        this.particles.forEach(particle =>{
            particle.update();
            particle.draw();
        });
    }
    Convert(){
        this.particles = [];
        const pixels = this.ctx.getImageData(0,0,this.canvasWidth,this.canvasHeight).data;
        this.ctx.clearRect(0,0, this.canvasWidth,this.canvasHeight)
        //console.log(pixels);
        for (let y = 0; y < this.canvasHeight;y+= this.psize){
            for (let x = 0; x < this.canvasWidth;x+= this.psize){
                const i = (y * this.canvasWidth + x)*4 ;//4 because rgbA
                const alpha = pixels[i + 3];
                if (alpha > 0){
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    const color = 'rgb('+ r +',' + g +',' + b + ')';
                    this.particles.push(new Particle(this, x , y,color));
                }
            }
        }
        console.log(this.particles)
    }
}
const converter = new Effect(ctx,canvas.width,canvas.height);
    converter.TextWrapper('black hole generator');
    converter.Render();
   
function animate(){
    converter.Render();
    requestAnimationFrame(animate);
}
animate();