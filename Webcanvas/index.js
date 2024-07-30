const canvas = document.getElementById('hole');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
   
})



//our drawing variables/tools


let colorPicker = document.getElementById('color-picker');
let selectedColor;
colorPicker.addEventListener('input', function() {
        selectedColor = colorPicker.value;
        //console.log(selectedColor);
    });

//eraser
document.getElementById("erase").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
})

let number = document.getElementById('number');
let size = 15;
number.addEventListener('input', () => {
        size = number.value;
        //console.log(size);
    });



const position2 = {
    x : undefined,
    y : undefined,
};

const position = {
    x : undefined,
    y : undefined,
};

let ifpressed = false;

window.addEventListener("mousedown",function(e){
     ifpressed = true;
     position2.x = e.pageX
     position2.y = e.pageY
})

window.addEventListener("mouseup",function(e){
     ifpressed = false;
})

 canvas.addEventListener("mousemove",function(e){
   if(ifpressed){
    position.x = e.pageX
    position.y = e.pageY
    draw(selectedColor,size);    

   }
    
})





function draw(color,size){

        
            
       ctx.beginPath();

       ctx.lineCap = "round";
        ctx.strokeStyle = `${color}`;
        ctx.lineWidth = size;
        
        console.log(position2)
        ctx.moveTo(position2.x,position2.y);        
        ctx.lineTo(position.x,position.y);
        ctx.stroke();  

        
        position2.x = position.x
        position2.y = position.y 
        
}


/*function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height); 
    draw(selectedColor);
            requestAnimationFrame(animate);
}


animate();*/