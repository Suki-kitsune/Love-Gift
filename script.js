// ===========================
// ELEMENTS
// ===========================

const giftBox = document.getElementById("giftBox");
const giftImg = document.getElementById("giftImg");
const magicGlow = document.getElementById("magicGlow");

const fox = document.getElementById("fox");
const heartButton = document.getElementById("heartButton");
const loveReveal = document.getElementById("loveReveal");

let taps = 0;
let opened = false;

// ===========================
// GIFT CLICK
// ===========================

giftBox.addEventListener("click", () => {

    if(opened) return;

    taps++;

    giftBox.classList.remove(
        "shake",
        "shakeBig",
        "glow"
    );

    void giftBox.offsetWidth;

    if(taps === 1){

        giftBox.classList.add("shake");

    }

    else if(taps === 2){

        giftBox.classList.add("shakeBig");

    }

    else if(taps === 3){

        giftBox.classList.add("glow");

    }

    else if(taps === 4){

        opened = true;

        // screen effect

        document.body.classList.add("dark");
        document.body.classList.add("flash");

        // gift opening

        giftBox.classList.add("open");

        // magic circle

        magicGlow.classList.add("magic");

        // change image after opening starts

        setTimeout(()=>{

            giftImg.src = "images/gift_open.png";

        },650);

        // explosion

        setTimeout(()=>{

            heartExplosion();

        },1000);

        // fox appears

        setTimeout(()=>{

            fox.classList.add("show");

        },2400);

        // heart button

        setTimeout(()=>{

            heartButton.classList.add("show");

        },3600);

        // love text

        setTimeout(()=>{

            loveReveal.classList.add("show");

        },4200);

    }

});

// ==========================================
// HEART EXPLOSION
// ==========================================

function heartExplosion(){

    for(let i=0;i<150;i++){

        createHeart();

    }

    for(let i=0;i<90;i++){

        createSparkle();

    }

    for(let i=0;i<60;i++){

        createPetal();

    }

}

// ==========================================
// HEARTS
// ==========================================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=(window.innerWidth/2)+"px";

    heart.style.top=(window.innerHeight/2)+"px";

    heart.style.fontSize=(Math.random()*22+18)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    const x=(Math.random()-0.5)*1000;

    const y=(Math.random()-0.5)*900;

    heart.animate([

        {

            transform:"translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${x}px,${y}px)
            scale(.2)
            rotate(${Math.random()*720}deg)`,

            opacity:0

        }

    ],{

        duration:2500+Math.random()*1200,

        easing:"ease-out"

    });

    setTimeout(()=>{

        heart.remove();

    },4000);

}

// ==========================================
// SPARKLES
// ==========================================

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=(window.innerWidth/2)+"px";

    s.style.top=(window.innerHeight/2)+"px";

    document.body.appendChild(s);

    const x=(Math.random()-0.5)*900;

    const y=(Math.random()-0.5)*800;

    s.animate([

        {

            transform:"translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${x}px,${y}px) scale(0)`,

            opacity:0

        }

    ],{

        duration:2200,

        easing:"ease-out"

    });

    setTimeout(()=>{

        s.remove();

    },2500);

}

// ==========================================
// PETALS
// ==========================================

function createPetal(){

    const p=document.createElement("div");

    p.className="petal";

    p.style.left=(window.innerWidth/2)+"px";

    p.style.top=(window.innerHeight/2)+"px";

    document.body.appendChild(p);

    const x=(Math.random()-0.5)*900;

    const y=-Math.random()*900;

    p.animate([

        {

            transform:"translate(0,0) rotate(0deg)",

            opacity:1

        },

        {

            transform:
            `translate(${x}px,${y}px)
            rotate(${Math.random()*720}deg)`,

            opacity:0

        }

    ],{

        duration:3500,

        easing:"ease-out"

    });

    setTimeout(()=>{

        p.remove();

    },3500);

}

// ==========================================
// HEART BUTTON
// ==========================================

heartButton.addEventListener("click",()=>{

    heartButton.style.pointerEvents="none";

    heartButton.style.transform=
    "translate(-50%,-50%) scale(1.4) rotate(45deg)";

    setTimeout(()=>{

        loveReveal.innerHTML=`

        <h1>Forever & Always ❤️</h1>

        <p>Tappu ❤️ Sumi</p>

        `;

    },600);

    // Page 2 later
    setTimeout(()=>{

        alert("Page 2 coming next ❤️");

    },2500);

});
