// ****** constants & variables

const menu = document.querySelector(".menu")

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");
const circles = [circle1, circle2, circle3, circle4, circle5];

const textContainer = document.querySelector(".textContainer");
const frame = document.querySelector(".frame");
const photo = document.querySelector(".photo");
const blocAnim = document.querySelector(".blocAnim");

const P1 = document.querySelector(".P1");
const P2 = document.querySelector(".P2");
const P3 = document.querySelector(".P3");
const P4 = document.querySelector(".P4");
const P5 = document.querySelector(".P5");
const pages = [P1, P2, P3, P4, P5];

const myWorkIntro = document.querySelector(".myWorkIntro");
const detail1 = document.querySelector(".detail1");
const detail2 = document.querySelector(".detail2");
const detail3 = document.querySelector(".detail3");
const detail4 = document.querySelector(".detail4");
const detail5 = document.querySelector(".detail5");
const detail6 = document.querySelector(".detail6");
const detailArray = [detail1, detail2, detail3, detail4, detail5, detail6];

const line = document.querySelector(".down");

// ****** functions

window.addEventListener("load", function() {
    addAnimation(textContainer, "slideinLeft");
    addAnimation(frame, "zoomIn");
    addAnimation(photo, "slideinPhoto");
});

function showHideMenu() {
    menu.classList.toggle("show");
}

function hideMenu() {
    menu.classList.remove("show");
}

function circle(num) {
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circles[num-1].innerHTML = "<div></div>";
}

function hideDelay(element, time) {
    setTimeout( () => { 
        element.style.display= "none";
    }, time);
}

function hide(element) {
    element.style.display= "none";
}

function show(element) {
    element.style.display= "block";
}

function addAnimation(element, name) {
    element.classList.add(name);
    removeAnimation(element, name)
}

function removeAnimation(element, name) {
    setTimeout( () => { 
        element.classList.remove(name);
    }, 2500);
}

function moveDown1() {
    addAnimation(P2, "slideInUp");
    addAnimation(P1, "slideOutTop");
    show(P2);
    hideDelay(P1, 2000);
    hideMenu();
    circle(2);
}

function moveRight() {
    addAnimation(P3, "slideinright");
    addAnimation(P2, "slideOutLeft");
    addAnimation(photo, "slideoutPhoto");
    show(P3);
    hideDelay(photo, 1000);
    hideDelay (P2, 1000);
    hideMenu();
    circle(3);
}

function moveDown2() {
    addAnimation(P4, "slideUp665");
    addAnimation(P3, "slideOutTop");
    show(P4);
    hideDelay(P3, 2000)
    hideDelay(blocAnim, 2000);
    hideMenu();
    circle(4);
}

function moveLeft() {
    addAnimation(P5, "slideleft");
    addAnimation(P4, "slideOutRight");
    show(P5);
    hideDelay(P4, 2000);
    hideMenu();
    circle(5);
}

function moveTop() {
    addAnimation(P1, "slideInDown");
    addAnimation(photo, "slideInDown");
    addAnimation(P5, "slideOutDown");
    show(P1);
    show(photo);
    hideDelay(P5, 2000);
    changeHeight();
    hideMenu();
    circle(1);
}

function changeHeight() {
    line.style.height= "430px";
    setTimeout( () => {
        line.style.height= "830px";
    }, 2000);
}

function showProject(num) {
    myWorkIntro.style.display = "none";
    detailArray.forEach( elem => {
        elem.style.display= "none";
    });
    detailArray[num-1].style.display = "block";
}

function page(num) {
    for (let i=0; i<pages.length; i++) {
        hide(pages[i]);
    };
    hide(photo);
    addAnimation(pages[num-1], "zoomIn");
    show(pages[num-1]);
    hideMenu();
    circle(num);
    if (num==1 || num ==2) {
        addAnimation(photo, "zoomIn");
        show(photo);
    }
    if (num==4) {
        hideDelay(blocAnim, 1000);
    }
}