const gift = document.getElementById("giftBox");

let taps = 0;
let opened = false;

gift.addEventListener("click", () => {

    if (opened) return;

    taps++;

    gift.classList.remove("shake","shakeBig","glow");

    void gift.offsetWidth;

    if (taps === 1) {

        gift.classList.add("shake");

    }

    else if (taps === 2) {

        gift.classList.add("shakeBig");

    }

    else if (taps === 3) {

        gift.classList.add("glow");

    }

    else if (taps === 4) {

        opened = true;

        document.body.classList.add("dark");

        gift.classList.add("open");

        setTimeout(()=>{

            alert("❤️ Next we're making the heart explosion!");

        },1000);

    }

});
