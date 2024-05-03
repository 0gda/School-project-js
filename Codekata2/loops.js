let fruits = new Set(["orange","lemon","banana"]);
const kfruit = "banana";
let fruit = "";
for (let fruit of fruits){
    if (fruit === kfruit){
        console.log(fruit, "has been found");
        break;
    }

    console.log(fruit);
    

// Same as above but using do while

}
console.log("test");
let i = 0;
do{
    let fruit = [...fruits][i];
    if (fruit === kfruit){
        console.log(kfruit , "has been found");
        break;
    }
    console.log(fruit)
    i++;
}while(fruit !== kfruit);