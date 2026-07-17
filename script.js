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
// GIFT TAPS
// ===============================

giftBox.addEventListener("click", () => {

    if (opened) return;

    taps++;

    giftBox.classList.remove("shake", "shakeBig", "glow");
    void giftBox.offsetWidth;

    if (taps === 1) {

        giftBox.classList.add("shake");

    }

    else if (taps === 2) {

        giftBox.classList.add("shakeBig");

    }

    else if (taps === 3) {

        giftBox.classList.add("glow");

    }

    else if (taps === 4) {

        opened = true;

        giftBox.classList.add("open");
        magicGlow.classList.add("magic");

        setTimeout(() => {

            giftImg.src = "gift_open.png";

        }, 600);

        setTimeout(() => {

            explode();

        }, 1000);

        setTimeout(() => {

            switchPage();

        }, 3000);

    }

});

// ===============================
// PAGE CHANGE
// ===============================

function switchPage() {

    page1.classList.remove("active");
    page2.classList.add("active");

    setTimeout(() => {

        textI.classList.add("show");

    }, 500);

    setTimeout(() => {

        textLove.classList.add("show");

    }, 1300);

    setTimeout(() => {

        textYou.classList.add("show");

    }, 2100);

    setTimeout(() => {

        fox.classList.add("show");

    }, 3200);

}

// ===============================
// EXPLOSION
// ===============================

function explode() {

    for (let i = 0; i < 180; i++) {

        createHeart();

    }

    for (let i = 0; i < 90; i++) {

        createSparkle();

    }

    for (let i = 0; i < 70; i++) {

        createPetal();

    }

}

// ===============================
// HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = (Math.random() * 26 + 18) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let x = (Math.random() - 0.5) * window.innerWidth * 2;
    let y = (Math.random() - 0.5) * window.innerHeight * 2;

    heart.animate([

        {
            transform: "translate(0,0) scale(1)",
            opacity: 1
        },

        {
            transform: `translate(${x}px,${y}px) scale(.3)`,
            opacity: 0
        }

    ], {

        duration: 2500,
        easing: "ease-out"

    });

    setTimeout(() => heart.remove(), 2600);

}

// ===============================
// SPARKLES
// ===============================

function createSparkle() {

    const s = document.createElement("div");

    s.className = "sparkle";

    s.style.left = "50%";
    s.style.top = "50%";

    document.body.appendChild(s);

    let x = (Math.random() - 0.5) * 1000;
    let y = (Math.random() - 0.5) * 800;

    s.animate([

        {
            transform: "translate(0,0)",
            opacity: 1
        },

        {
            transform: `translate(${x}px,${y}px)`,
            opacity: 0
        }

    ], {

        duration: 1800

    });

    setTimeout(() => s.remove(), 1900);

}

// ===============================
// PETALS
// ===============================

function createPetal() {

    const p = document.createElement("div");

    p.className = "petal";

    p.style.left = "50%";
    p.style.top = "50%";

    document.body.appendChild(p);

    let x = (Math.random() - 0.5) * window.innerWidth * 2;
    let y = (Math.random() - 0.5) * window.innerHeight * 2;

    p.animate([

        {
            transform: "translate(0,0) rotate(0deg)",
            opacity: 1
        },

        {
            transform: `translate(${x}px,${y}px) rotate(720deg)`,
            opacity: 0
        }

    ], {

        duration: 2600,
        easing: "ease-out"

    });

    setTimeout(() => p.remove(), 2700);

}
