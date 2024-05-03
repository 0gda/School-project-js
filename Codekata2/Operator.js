let myFruit = "watermelon";

switch (myFruit) {
    case "watermelon":
        console.log("Big fruit");
        break;
}

let fruits = new Set(["lemon","watermelon"]);
/*let test = (fruits.has(myFruit)) ? "YES" : "NO";

console.log(test)*/


console.log((fruits.has(myFruit)) ? "YES" : "NO")
