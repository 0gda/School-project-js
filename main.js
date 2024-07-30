
let canvas = window;



document.querySelector("h1").onmouseover = () => {
   Hack("h1",10,1/3);
}

document.getElementById('menu').addEventListener('click', function() {
    this.classList.toggle('Menu');
});


window.onload = h => {
    setTimeout(() => {
   Hack("h1",15,1/5);
   },1500);
   setTimeout(() => {
    var i = 0;
    var text = document.getElementById("small").dataset.text;
    var wait = 55;
    typing();
    function typing() {
     if (i < text.length) {
        document.getElementById("small").innerHTML += text.charAt(i);
        i++;
    setTimeout(typing, wait);
    }
}
 
   },2500);
  
}

document.querySelector("#small").onmouseover = () => {
   let speed = 10
   let iterations = 1/2
   let target = "#small"
   Hack(target,speed,iterations);
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$%^&";

function Hack(target,speed,iterations){
     let i = 0;
      const action = document.querySelector(target)

    const interval = setInterval(() => {
    action.innerText = action.innerText.split("")
     .map((letter,CurrentLetter) =>{
        if (CurrentLetter < i){
            return action.dataset.text[CurrentLetter];
        }
        return letters[Math.floor(Math.random() * 30)]}
    )
     .join('');
     if (i >= action.dataset.text.length){
        clearInterval(interval);
     }
     i += iterations;
     },speed);
}
//setTimeout(() =>{
   /* let flash = undefined;
    document.body.onclick = () => {
        
        if(flash == undefined){
         flash = document.createElement("div")
        flash.id ='light';
        document.body.appendChild(flash); 
            document.body.onpointermove = e => {
            const {clientX,clientY} = e;
            flash.animate({
            left: `${clientX}px`, 
            top: `${clientY}px`,
            width: `${canvas.innerWidth/5}px`,
            height: `${canvas.innerWidth/5}px`,
            },{duration:2000,fill:"forwards"})
        }   
       
       
        
    } 

    }
    */
    
      
//},1000);
const images = ['limage','cimage','rimage'];


    
    
function Rotate (){
    const current = document.querySelector('img.cimage');
    const next = document.querySelector('img.rimage');
    const prev = document.querySelector('img.limage');

    const currentClass = current.className;
    const nextClass = next.className;
    const prevClass = prev.className;



    prev.className = currentClass;
    current.className = nextClass;
    next.className = prevClass;

   prev.removeEventListener('click', Rotate);
   next.removeEventListener('click', Rotate);
   current.removeEventListener('click', Rotate);

    document.querySelector('img.cimage').addEventListener("click", Rotate)


};
    
document.querySelector('img.cimage').addEventListener("click", Rotate)




document.querySelectorAll("a").forEach(a => {
    a.addEventListener("mouseover", () => {
    function playSound(){
        let audio = new Audio("../hover.mp3");
        audio.volume(0.5);
    audio.play();
    }
    playSound();
    });
    
    })
    
