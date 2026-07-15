const gift = document.getElementById("giftBox");

let taps = 0;

gift.addEventListener("click", ()=>{

    taps++;

    gift.classList.add("shake");

    setTimeout(()=>{
        gift.classList.remove("shake");
    },400);

    if(taps==4){

        alert("🎉 Gift Opened! (Next we'll make the real animation)");

    }

});
