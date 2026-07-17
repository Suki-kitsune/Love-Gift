// ===============================
// ELEMENTS
// ===============================

const giftBox = document.getElementById("giftBox");
const giftImg = document.getElementById("giftImg");
const magicGlow = document.getElementById("magicGlow");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const textI = document.getElementById("textI");
const textLove = document.getElementById("textLove");
const textYou = document.getElementById("textYou");
const fox = document.getElementById("fox");

let taps = 0;
let opened = false;

// ===============================
// GIFT
// ===============================

giftBox.addEventListener("click", () => {

    if (opened) return;

    taps++;

    giftBox.classList.remove("shake","shakeBig","glow");
    void giftBox.offsetWidth;

    if(taps==1){

        giftBox.classList.add("shake");

    }

    else if(taps==2){

        giftBox.classList.add("shakeBig");

    }

    else if(taps==3){

        giftBox.classList.add("glow");

    }

    else{

        opened=true;

        giftBox.classList.add("open");

        magicGlow.classList.add("magic");

        setTimeout(()=>{

            giftImg.src="gift_open.png";

        },500);

        setTimeout(()=>{

            heartRain();

        },900);

    }

});

// ===============================
// HEARTS FROM GIFT
// ===============================

function heartRain(){

    const rect=giftImg.getBoundingClientRect();

    let count=0;

    const interval=setInterval(()=>{

        for(let i=0;i<10;i++){

            createHeart(rect);

        }

        count++;

        if(count>=28){

            clearInterval(interval);

            setTimeout(showLove,900);

        }

    },70);

}

// ===============================

function createHeart(rect){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=
    (rect.left+rect.width/2+(Math.random()*40-20))+"px";

    heart.style.top=
    (rect.top+40)+"px";

    heart.style.fontSize=
    (20+Math.random()*35)+"px";

    document.body.appendChild(heart);

    const x=(Math.random()-0.5)*window.innerWidth;

    const y=-(Math.random()*window.innerHeight+300);

    heart.animate([

        {

            transform:"translate(0,0) scale(.5)",

            opacity:0

        },

        {

            transform:
            `translate(${x}px,${y}px) scale(1.2)`,

            opacity:1,

            offset:.7

        },

        {

            transform:
            `translate(${x}px,${y-150}px) scale(1)`,

            opacity:0

        }

    ],{

        duration:2500,

        easing:"ease-out",

        fill:"forwards"

    });

    setTimeout(()=>heart.remove(),2600);

}

// ===============================
// LOVE PAGE
// ===============================

function showLove(){

    page1.classList.remove("active");

    page2.classList.add("active");

    setTimeout(()=>{

        textI.classList.add("show");

    },500);

    setTimeout(()=>{

        textLove.classList.add("show");

    },1300);

    setTimeout(()=>{

        textYou.classList.add("show");

    },2100);

    setTimeout(()=>{

        fox.classList.add("show");

    },3200);

}
