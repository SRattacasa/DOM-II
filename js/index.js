// Your code goes here
let mOver = document.querySelector("h2")
console.log(mOver);
mOver.addEventListener("mouseenter", () => mOver.style.color = "red");

const navLinks = document.querySelectorAll("a");
navLinks.forEach((e) => e.addEventListener('mouseover', (event) => {
    event.preventDefault();
    event.style.color = "green";
}))
console.log(navLinks);

navLinks.forEach(e => e.addEventListener("click", () => e = "18"));


let mOver2 = document.querySelector("h1")
mOver2.addEventListener("auxclick", () => mOver2.style.color = "blue");

let mOver3 = document.querySelector(".intro p")
mOver3.addEventListener("click", () => mOver3.style.color = "green");


let mOver4 = document.querySelector(".text-content h2");
console.log(mOver4);
mOver4.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

let mOver5 = document.querySelector("h2")
mOver.addEventListener("mouseenter", (e) => mOver.style.color = "red");


let mOver6 = document.querySelector(".content-section");
mOver6.addEventListener('mouseenter', () => mOver6.style.backgroundcolor = "orange");

// let mOver7 = document.querySelector("h2")
// console.log(mOver);
// mOver.addEventListener("mouseenter", () => mOver.style.color = "red");

// let mOver8 = document.querySelector("h2")
// console.log(mOver);
// mOver.addEventListener("mouseenter", () => mOver.style.color = "red");

// let mOver9 = document.querySelector("h2")
// console.log(mOver);
// mOver.addEventListener("mouseenter", () => mOver.style.color = "red");

// let mOver10 = document.querySelector("h2")
// console.log(mOver);
// mOver.addEventListener("mouseenter", () => mOver.style.color = "red");