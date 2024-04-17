document.querySelector(".test").addEventListener("click", function(event){
    alert("button was clicked");
    event.stopImmediatePropagation();
});

document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert("nuh uh!");
});

window.addEventListener("click", function(event){
    alert("you clicked");
});

window.addEventListener("beforeunload", function(event){
    event.preventDefault();
    alert("no");
    event.location.reload;
});