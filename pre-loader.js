window.addEventListener("load", () => {

const letters = Array.from(document.querySelectorAll(".preloader-title span"));
const tl = gsap.timeline();

let remaining = [...letters];

function revealBatch(){

let batchSize = gsap.utils.random(2,3);
let selected = [];

for(let i=0;i<batchSize;i++){

if(remaining.length === 0) break;

let index = Math.floor(Math.random()*remaining.length);
selected.push(remaining[index]);
remaining.splice(index,1);

}

if(selected.length > 0){

tl.to(selected,{
opacity:1,
duration:0.15
})

.to(selected,{
opacity:0.3,
repeat:2,
yoyo:true,
duration:0.08
})

.to(selected,{
opacity:1,
duration:0.05
});

}

}

/* RANDOM LETTER REVEAL */

while(remaining.length){
revealBatch();
}


/* FINAL GLOW */

tl.to(".preloader-title",{
textShadow:"0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff",
duration:0.6
})

/* CONTINUOUS ZOOM */

.to(".preloader-title",{
scale:1.8,
duration:1.4,
ease:"power2.out"
})

/* FADE WHILE ZOOMING (overlap removes pause) */

.to(".preloader",{
opacity:0,
duration:0.8
},"-=1")   // overlap start before zoom ends

.set(".preloader",{display:"none"});

});