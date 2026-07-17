let taps = 0;

const giftBox = document.getElementById("giftBox");
const giftImg = document.getElementById("giftImg");
const glow = document.getElementById("magicGlow");

const heartTransition = document.getElementById("heartTransition");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const fox = document.getElementById("fox");


giftBox.addEventListener("click",()=>{

    taps++;

    giftImg.classList.remove(
        "shake",
        "shakeBig",
        "glow"
    );


    if(taps === 1){

        giftImg.classList.add("shake");

    }


    if(taps === 2){

        giftImg.classList.add("shakeBig");

    }


    if(taps === 3){

        giftImg.classList.add("glow");

        glow.classList.add("magic");

    }


    if(taps === 4){

        openGift();

    }


});




function openGift(){


    // change image

    giftImg.src="gift_open.png";


    giftImg.classList.add("open");


    setTimeout(()=>{

        createGiftHearts();

    },300);



    setTimeout(()=>{

        heartTransitionEffect();

    },1800);



}




function createGiftHearts(){


    let box =
    giftBox.getBoundingClientRect();



    for(let i=0;i<80;i++){


        let heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML=[
            "❤️",
            "💗",
            "💕",
            "💖",
            "💘"
        ][Math.floor(Math.random()*5)];



        heart.style.left =
        box.left + box.width/2 + "px";


        heart.style.top =
        box.top + box.height/2 + "px";



        heart.style.position="fixed";


        heart.style.setProperty(
            "--x",
            (Math.random()*600-300)+"px"
        );



        heart.style.animationDelay =
        Math.random()*0.5+"s";



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },3500);


    }

}




function heartTransitionEffect(){


    for(let i=0;i<60;i++){


        let h=document.createElement("div");


        h.className="transitionHeart";


        h.innerHTML="❤️";



        h.style.left =
        Math.random()*100+"%";


        h.style.top =
        Math.random()*100+"%";



        heartTransition.appendChild(h);


    }



    setTimeout(()=>{


        page1.classList.remove("active");


        page2.classList.add("active");



        showLove();



        heartTransition.innerHTML="";



    },2200);


}




function showLove(){


    setTimeout(()=>{

        document
        .getElementById("textI")
        .classList.add("show");


    },500);



    setTimeout(()=>{

        document
        .getElementById("textLove")
        .classList.add("show");


    },1300);



    setTimeout(()=>{

        document
        .getElementById("textYou")
        .classList.add("show");


    },2100);



    setTimeout(()=>{


        fox.classList.add("show");


    },3000);



}




/* ================= HEART PARTICLES ================= */

const style=document.createElement("style");

style.innerHTML=`

.heart{

position:fixed;

font-size:28px;

pointer-events:none;

z-index:9999;

animation:riseHeart 3s linear forwards;

}


@keyframes riseHeart{


0%{

transform:
translate(0,0)
scale(.5);

opacity:1;

}


100%{

transform:
translate(var(--x),-100vh)
scale(1.5)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
