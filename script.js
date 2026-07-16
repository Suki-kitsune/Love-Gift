const gift = document.getElementById("giftBox");
const magicGlow = document.getElementById("magicGlow");

let taps = 0;
let opened = false;

gift.addEventListener("click", () => {

    if (opened) return;

    taps++;

    gift.classList.remove("shake","shakeBig","glow");

    void gift.offsetWidth;

    if(taps === 1){

        gift.classList.add("shake");

    }

    else if(taps === 2){

        gift.classList.add("shakeBig");

    }

    else if(taps === 3){

        gift.classList.add("glow");

    }

    else if(taps === 4){

        opened = true;

        document.body.classList.add("dark");
        document.body.classList.add("flash");

        gift.classList.add("open");

        magicGlow.classList.add("magic");

        setTimeout(()=>{

            heartExplosion();

        },1000);

    }

});



function heartExplosion(){

    for(let i=0;i<120;i++){

        createHeart();

    }

    for(let i=0;i<80;i++){

        createSparkle();

    }

    for(let i=0;i<50;i++){

        createPetal();

    }

}



function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=(window.innerWidth/2)+"px";

    heart.style.top=(window.innerHeight/2)+"px";

    heart.style.fontSize=(Math.random()*25+15)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    heart.style.color=
    `hsl(${330+Math.random()*30},100%,70%)`;

    document.body.appendChild(heart);

    const x=(Math.random()-0.5)*900;

    const y=-Math.random()*800-100;

    heart.animate([

        {
            transform:"translate(0,0) scale(1)",
            opacity:1
        },

        {
            transform:`translate(${x}px,${y}px) scale(0.3) rotate(${Math.random()*720}deg)`,
            opacity:0
        }

    ],{

        duration:2500+Math.random()*1200,

        easing:"ease-out"

    });

    setTimeout(()=>{

        heart.remove();

    },3800);

}

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=(window.innerWidth/2)+"px";
    s.style.top=(window.innerHeight/2)+"px";

    document.body.appendChild(s);

    const x=(Math.random()-0.5)*900;
    const y=(Math.random()-0.5)*700;

    s.animate([

        {transform:"translate(0,0)",opacity:1},

        {transform:`translate(${x}px,${y}px) scale(0)`,opacity:0}

    ],{

        duration:1800+Math.random()*1200,

        easing:"ease-out"

    });

    setTimeout(()=>s.remove(),3000);

}




function createPetal(){

    const p=document.createElement("div");

    p.className="petal";

    p.style.left=(window.innerWidth/2)+"px";
    p.style.top=(window.innerHeight/2)+"px";

    document.body.appendChild(p);

    const x=(Math.random()-0.5)*700;
    const y=-Math.random()*700;

    p.animate([

        {
            transform:"translate(0,0) rotate(0deg)",
            opacity:1
        },

        {
            transform:`translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`,
            opacity:0
        }

    ],{

        duration:3500,

        easing:"ease-out"

    });

    setTimeout(()=>p.remove(),3500);

}
