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
const phone = document.querySelector(".phone");
const exit = document.querySelector(".exit");
const fullSize = document.querySelector(".fullSize");
const showCertificate = document.querySelector(".showCertificate");
const listCerti = ["url('images/certi1.jpeg')", "url('images/certi2.jpeg')", "url('images/certi3.jpeg')", "url('images/certi4.jpeg')", "url('images/certi5.jpeg')", "url('images/certi6.jpeg')"];

// ****** functions

function showHideMenu() {
    switchList(menu, "show");
}

function switchList(element, list) {
    element.classList.toggle(list);
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

function showDelay(element, time) {
    setTimeout( () => { 
        element.style.display= "block";
    }, time);
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
    }, 2100);
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
    addAnimation(P2, "slideOutLeft");
    addAnimation(photo, "slideoutPhoto");
    addAnimation(P3, "slideinright");
    show(P3);
    hideDelay(photo, 2000);
    hideDelay (P2, 2000);
    hideMenu();
    circle(3);
}

function moveDown2() {
    addAnimation(P4, "slideUp665");
    addAnimation(P3, "slideOutTop");
    show(P4);
    hideDelay(P3, 2000);
    show(blocAnim);
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
    addAnimation(photo, "slideinPhoto");
    addAnimation(P5, "slideOutDown");
    show(P1);
    showDelay(photo, 1000);
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
    show(blocAnim);
    hide(photo);
    hideMenu();
    addAnimation(pages[num-1], "zoomIn");
    show(pages[num-1]);
    circle(num);
    if (num==1 || num ==2) {
        addAnimation(photo, "zoomIn");
        show(photo);
    }
    // if (num==3) {
    //     addAnimation(photo, "slideoutPhoto");
    //     hideDelay(photo, 1000);
    // }
    if (num==4) {
        hideDelay(blocAnim, 1000);
    }
}
function showPhone() {
    phone.innerHTML= "23946046";
}
function hidePhone() {
    phone.innerHTML= "Call Me";
}
function showCerti(num) {
    addAnimation(showCertificate, "zoomIn500")
    showDelay(showCertificate, 200);
    showCertificate.style.backgroundImage = listCerti[num-1];
}
function hideCerti() {
    removeAnimation(fullSize, "resize2");
    removeAnimation(exit, "resize2");
    removeAnimation(showCertificate, "resize");
    addAnimation(showCertificate, "zoomOut500")
    hideDelay(showCertificate, 500);
}
function sizeCerti() {
    switchList(fullSize, "resize2");
    switchList(exit, "resize2");
    switchList(showCertificate, "resize");
}