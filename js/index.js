// Your code goes here
let mOver = document.querySelector("h2")
console.log(mOver);
mOver.addEventListener("mouseenter", () => mOver.style.color = "red");

const navLinks = document.querySelectorAll("a");
navLinks.forEach((e) => e.addEventListener('mouseover', (event) => {
    event.preventDefault();
    e.style.color = "yellow";
}))
console.log(navLinks);




let mOver2 = document.querySelector("h1")
mOver2.addEventListener("auxclick", () => mOver2.style.color = "blue");

let mOver3 = document.querySelector(".intro p")
mOver3.addEventListener("click", () => mOver3.style.color = "green");


let mOver4 = document.querySelector(".text-content h2");
console.log(mOver4);
mOver4.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
  
    
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

let mOver5 = document.querySelector("h2")
mOver.addEventListener("mouseenter", (e) => mOver.style.color = "red");


let mOver6 = document.querySelector(".img-content img");
mOver6.addEventListener('dblclick', function(){
    mOver6.style.transform = "scale(1.6)";
    mOver6.style.transition = "transform 1s"}
)


let mOver7 = document.querySelector(".img-content img");
mOver7.addEventListener('mouseleave', function(){
    mOver7.style.transform = "scale(1)";
    mOver7.style.transition = "transform 1s"}
)

let mOver8 = document.querySelectorAll(".img-content");
console.log(mOver8);
mOver8.forEach(e => e.addEventListener('mouseup', function(){
    e.style.transform = "scale(.5)";
    e.style.transition = "transform 1s"})
)

let final = document.querySelector(".text-content h2");
console.log(final);
final.addEventListener("keydown", () => final.innerHTML = "<h1>LOL</h1>" );

const img = document.querySelector(".intro img");
img.addEventListener('mouseleave', () => img.src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5dcda59e63bb6ae5c9282801_small-red-logo.png");


// let mOver10 = document.querySelector("h2")
// console.log(mOver);
// mOver.addEventListener("mouseenter", () => mOver.style.color = "red");