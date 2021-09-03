// Makes the picture & logo appear
const picture = document.getElementById("pp");

picture.style.opacity = "0";

const mainLogo = document.getElementById("logo");

mainLogo.style.transform = "translateY(-300%)";
setTimeout(function () {
    picture.style.transition = "opacity 1500ms ease-in";
    picture.style.opacity = "100%";
    mainLogo.style.transition = "transform 1250ms ease-in";
    mainLogo.style.transform = "translateY(0)";
}, 250);

//Makes my name appear
const myName = document.getElementById("name");

myName.style.transform = "translateY(120%)";

setTimeout(function () {
    myName.style.transition = "transform 500ms ease-in";
    myName.style.transform = "translateY(0)";
}, 750);

//Makes the subheading appear
const subHead = document.getElementById("subhead");

subHead.style.transform = "translateY(120%)";

setTimeout(function () {
    subHead.style.transition = "transform 500ms ease-in";
    subHead.style.transform = "translateY(0)";
}, 1500);

//Makes option 1 appear
const op1 = document.getElementById("opt1");

op1.style.transform = "translateY(120%)";

setTimeout(function () {
    op1.style.transition = "transform 500ms ease-in";
    op1.style.transform = "translateY(0)";
}, 2000);

//Makes option 2 appear
const op2 = document.getElementById("opt2");

op2.style.transform = "translateY(120%)";

setTimeout(function () {
    op2.style.transition = "transform 500ms ease-in";
    op2.style.transform = "translateY(0)";
}, 2500);

//Makes option 2 appear
const op3 = document.getElementById("opt3");

op3.style.transform = "translateY(120%)";

setTimeout(function () {
    op3.style.transition = "transform 500ms ease-in";
    op3.style.transform = "translateY(0)";
}, 3000);
























//Button effect


op1.onmouseenter = function () {
    op1.style.textShadow = "0px 0px 5px #617fb4";
};
op1.onmouseleave = function () {
    op1.style.textShadow = "0px 0px 5px rgba(0, 0, 0, 1)";
};

op2.onmouseenter = function () {
    op2.style.textShadow = "0px 0px 5px #617fb4";
};
op2.onmouseleave = function () {
    op2.style.textShadow = "0px 0px 5px rgba(0, 0, 0, 1)";
};

op3.onmouseenter = function () {
    op3.style.textShadow = "0px 0px 5px #617fb4";
};
op3.onmouseleave = function () {
    op3.style.textShadow = "0px 0px 5px rgba(0, 0, 0, 1)";
};














// Scroll reveal or hide side bar
const sideBar = document.querySelector(".side_bar");


//use same observer to show the up button

const scrollUp = document.querySelector(".top");
scrollUp.style.opacity = "0";

const hero = document.querySelector(".hero");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");

const heroOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            sideBar.style.left = "0";
            scrollUp.style.opacity = "0.5";
        } else {
            sideBar.style.left = "-200px";
            scrollUp.style.opacity = "0";
        }
    })
}, heroOptions);

heroObserver.observe(hero);

//hide when on footer

const foots = document.querySelector(".footer");

const footsOptions = {
    threshold: "0.1"
};

const footsObserver = new IntersectionObserver(function (entries, footsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            scrollUp.style.opacity = "0.5";
        } else {
            scrollUp.style.opacity = "0";
        }
    })
}, footsOptions);

footsObserver.observe(foots);






//New Project Section
//Hover effect
const projImages = document.querySelectorAll('.swiper .swiper-slide');

const projLabel = document.querySelectorAll('.swiper .swiper-slide p');

const projOverlay = document.querySelectorAll('.project_overlay');

const closeButton = document.querySelectorAll('.close');

//Makes project thumbnails coloured on mobile devices
const mobileScreen = window.matchMedia('(max-width: 850px)')

if (mobileScreen.matches) {
    for(var i = 0; i < projImages.length; i++) {
        let count = i;
        projImages[count].style.filter = "grayscale(0%)";
        projImages[count].onmouseenter = function () {
            projImages[count].style.cursor = "pointer";
            projLabel[count].style.display = "block";
        };
        projImages[count].onmouseleave = function () {
            projLabel[count].style.display = "none";
        };

        projImages[count].addEventListener("click", function() {
            projOverlay[count].style.display = "block";
        });

        closeButton[count].addEventListener("click", function() {
            projOverlay[count].style.display = "none";
        });
    }
} else {
    for(var i = 0; i < projImages.length; i++) {
        let count = i;

        projImages[count].onmouseenter = function () {
            projImages[count].style.filter = "grayscale(0%)";
            projImages[count].style.cursor = "pointer";
            projLabel[count].style.display = "block";
        };
        projImages[count].onmouseleave = function () {
            projImages[count].style.filter = "grayscale(100%)";
            projLabel[count].style.display = "none";
        };

        projImages[count].addEventListener("click", function() {
            projOverlay[count].style.display = "block";
        });

        closeButton[count].addEventListener("click", function() {
            projOverlay[count].style.display = "none";
        });
    }
}


































