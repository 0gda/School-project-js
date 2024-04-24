function* extractNumber(attempts) {
    for (let i = 0; i < attempts; i++){
        yield Math.floor(Math.random() * 91) ;
    }
}

let cpu = 0;
let player = 0;

while (true){
let cpu = 0;
let player = 0;


let cpuGenerator = extractNumber(2);
cpu += cpuGenerator.next().value;
cpu += cpuGenerator.next().value;


let playerGenerator = extractNumber(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

console.log("CPU: " + cpu);
console.log("PLAYER: " + player); 

console.log((cpu > player)? "CPU WIN" : "PLAYER WIN");

if(cpu >= 81*2 && player >= 81*2){
    break;
}

}
/*
let cpu = 0;
let player = 0;


let cpuGenerator = extractNumber(2)
cpu += cpuGenerator.next().value;
cpu += cpuGenerator.next().value;


let playerGenerator = extractNumber(2)
player += playerGenerator.next().value;
player += playerGenerator.next().value;

console.log("CPU: " + cpu);
console.log("PLAYER: " + player); 

console.log((cpu > player)? "CPU WIN" : "PLAYER WIN");
*/