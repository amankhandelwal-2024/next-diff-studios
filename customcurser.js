document.addEventListener("DOMContentLoaded", () => {
  if ("ontouchstart" in window || window.innerWidth < 768) {
    const cursor = document.querySelector(".custom-curser");
    if(cursor) cursor.style.display="none";
    document.body.style.cursor="auto";
    return;
  }
      

const cursor = document.querySelector(".custom-cursor");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;


/* track mouse */

document.addEventListener("mousemove", (e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});


/* smooth follow animation */

function animate(){

posX += (mouseX - posX) * 0.15;
posY += (mouseY - posY) * 0.15;

cursor.style.left = posX + "px";
cursor.style.top = posY + "px";

requestAnimationFrame(animate);

}

animate();


/* change cursor color based on text */

document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,a,span").forEach(el=>{

el.addEventListener("mouseenter", ()=>{

const color = window.getComputedStyle(el).color;

cursor.style.borderColor = color;

});

el.addEventListener("mouseleave", ()=>{

cursor.style.borderColor = "#7a5cff";

});

});


});
