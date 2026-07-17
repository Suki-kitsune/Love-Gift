let taps = 0;

const gift = document.getElementById("gift");
const heartTransition = document.getElementById("heartTransition");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const fox = document.getElementById("fox");

gift.addEventListener("click",()=>{

    taps++;

    gift.classList.remove("shake1","shake2","glow");


    if(taps===1){

        gift.classList.add("shake1");

    }


    if(taps===2){

        gift.classList.add("shake2");

    }


    if(taps===3){

        gift.classList.add("glow");

    }


    if(taps===4){

        openGift();

    }


});



function openGift(){


    gift.classList.add("open");


    setTimeout(()=>{

        createGiftHearts();

    },500);



    setTimeout(()=>{

        heartScreenTransition();

    },1800);


}



function createGiftHearts(){


    let rect = gift.getBoundingClientRect();


    for(let i=0;i<70;i++){


        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=
        ["❤️","💗","💕","💖","💘"]
        [Math.floor(Math.random()*5)];



        heart.style.left=
        rect.left+
        rect.width/2+
        "px";


        heart.style.top=
        rect.top+
        rect.height/2+
        "px";



        heart.style.setProperty(
            "--x",
            (Math.random()*500-250)+"px"
        );



        heart.style.animationDelay=
        Math.random()*0.5+"s";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },3500);


    }

}




function heartScreenTransition(){


    heartTransition.style.opacity="1";


    for(let i=0;i<40;i++){


        let h=document.createElement("div");

        h.className="transition-heart";

        h.innerHTML="❤️";


        h.style.left=Math.random()*100+"%";

        h.style.top=Math.random()*100+"%";


        heartTransition.appendChild(h);


    }



    setTimeout(()=>{


        page1.style.display="none";

        page2.style.display="flex";


        heartTransition.style.opacity="0";


        showLove();


    },2200);


}



function showLove(){


    let texts=document.querySelectorAll(".love-text");


    setTimeout(()=>{

        texts[0].classList.add("show");

    },500);



    setTimeout(()=>{

        texts[1].classList.add("show");

    },1300);



    setTimeout(()=>{

        texts[2].classList.add("show");


    },2100);



    setTimeout(()=>{

        fox.classList.add("show");

    },3000);



}
