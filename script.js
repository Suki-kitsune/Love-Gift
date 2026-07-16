// ===============================
// ELEMENTS
// ===============================

const giftBox = document.getElementById("giftBox");
const giftImg = document.getElementById("giftImg");
const magicGlow = document.getElementById("magicGlow");

const fox = document.getElementById("fox");
const heartButton = document.getElementById("heartButton");
const loveReveal = document.getElementById("loveReveal");


let taps = 0;
let opened = false;



// ===============================
// GIFT SYSTEM
// ===============================


giftBox.addEventListener("click",()=>{


if(opened) return;


taps++;



giftBox.classList.remove(
"shake",
"shakeBig",
"glow"
);


void giftBox.offsetWidth;



if(taps===1){

giftBox.classList.add("shake");

}



else if(taps===2){

giftBox.classList.add("shakeBig");

}



else if(taps===3){

giftBox.classList.add("glow");

}




else if(taps===4){


opened=true;



giftBox.classList.add("open");

magicGlow.classList.add("magic");



setTimeout(()=>{

giftImg.src="images/gift_open.png";

},650);




setTimeout(()=>{

heartExplosion();

},1000);





setTimeout(()=>{

fox.classList.add("show");

},2300);





setTimeout(()=>{

heartButton.classList.add("show");

},3500);






setTimeout(()=>{

loveReveal.classList.add("show");

},4200);



}



});






// ===============================
// PARTICLE EXPLOSION
// ===============================


function heartExplosion(){


for(let i=0;i<120;i++){

createHeart();

}



for(let i=0;i<70;i++){

createSparkle();

}



for(let i=0;i<50;i++){

createPetal();

}


}





function createHeart(){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="50%";

heart.style.fontSize=
(Math.random()*25+15)+"px";


heart.style.zIndex="9999";



document.body.appendChild(heart);



let x=(Math.random()-0.5)*900;

let y=(Math.random()-0.5)*700;



heart.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:
`translate(${x}px,${y}px) scale(.2)`,

opacity:0

}

],{


duration:2500

});



setTimeout(()=>{

heart.remove();

},3000);



}






function createSparkle(){


let s=document.createElement("div");


s.className="sparkle";


s.style.left="50%";

s.style.top="50%";


document.body.appendChild(s);



let x=(Math.random()-0.5)*900;

let y=(Math.random()-0.5)*700;



s.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)`,

opacity:0

}

],{


duration:2000

});



setTimeout(()=>{

s.remove();

},2200);



}







function createPetal(){


let p=document.createElement("div");


p.className="petal";


p.style.left="50%";

p.style.top="50%";


document.body.appendChild(p);



let x=(Math.random()-0.5)*900;

let y=-Math.random()*800;



p.animate([

{

transform:"translate(0,0)"

},

{

transform:
`translate(${x}px,${y}px)
rotate(600deg)`,

opacity:0

}

],{


duration:3000

});



setTimeout(()=>{

p.remove();

},3200);



}








// ===============================
// HEART BUTTON -> PAGE 2
// ===============================


heartButton.addEventListener("click",()=>{


loveReveal.classList.remove("show");


setTimeout(()=>{


document.getElementById("page1")
.classList.remove("active");



document.getElementById("page2")
.classList.add("active");



},700);



});







// ===============================
// PAGE 2 -> PAGE 3
// ===============================


function openGallery(){


document.getElementById("page2")
.classList.remove("active");



document.getElementById("page3")
.classList.add("active");


}







// ===============================
// SLIDESHOW
// ===============================


let photos=[

"images/Sumi1.jpg",
"images/Sumi2.jpg",
"images/Sumi3.jpg",
"images/Sumi4.jpg",
"images/Sumi5.jpg",
"images/Sumi6.jpg",
"images/Sumi7.jpg"

];



let photoIndex=0;



setInterval(()=>{


let img=document.getElementById("slideImage");



if(img){


photoIndex++;


if(photoIndex>=photos.length){

photoIndex=0;

}


img.src=photos[photoIndex];


}



},2500);








// ===============================
// PAGE 3 -> ENDING
// ===============================


function openEnding(){


document.getElementById("page3")
.classList.remove("active");



document.getElementById("page4")
.classList.add("active");


}
