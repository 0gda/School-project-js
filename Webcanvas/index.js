const canvas = document.getElementById('hole');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
   
})
let Group;

window.addEventListener("click",function(e){
   
    let x = e.pageX
    let y = e.pageY
    
    Group = new Particle();
    Group.draw(x,y)

    animation();
})
  
class Particle{

    constructor() {
        this.particles = [];
    }



    particle(x,y){
        ctx.fillStyle = 'white';
        ctx.rect(x,y,2,2)
        ctx.fill();
        this.particles.push({x ,y})
    }
    draw(x,y){
        let i = 0
        while (i <= 5){
            this.particle(x + i*4 ,y + i*4);
            this.particle(x + i*4 ,y + -(i*4));

            this.particle(x + -(i*4) ,y + i*4);
            this.particle(x + -(i*4) ,y + -(i*4));

            this.particle(x + i*6 ,y);
            this.particle(x +  -(i*6) ,y);

            this.particle(x,y + i*6 );
            this.particle(x,y +  -(i*6) );
            i++;
        }
    }
    update(){
    this.particles.forEach(particle => {
        particle.y += 1;
    });
    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Redraw particles with updated positions
    this.draw();
}


    
}
function animation(){
     requestAnimationFrame(animation);
    if(Group){
        Group.update();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        Group.draw();
    }
}