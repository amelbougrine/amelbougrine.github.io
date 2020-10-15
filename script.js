const menu = document.querySelector(".menu")
function showMenu () {
    menu.classList.toggle("show");
}
var numPage = 1 ;
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");
const circles = [circle1, circle2, circle3, circle4, circle5];

function nextPage2 () {
    numPage = 2;
    document.querySelector(".textContainer").classList.add("slideOutTop");
    document.querySelector(".frame").classList.add("slideOutTop");
    document.querySelectorAll(".P2").forEach(element => {
        element.style.display= "block";
    });
    setTimeout( () => {
        document.querySelectorAll(".P1").forEach(element => {
            element.style.display = "none";
        });
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circle2.innerHTML = "<div></div>";
}
function nextPage3 () {
    numPage = 3;
    document.querySelector(".P2").classList.add("slideOutLeft");
    document.querySelector(".photo").classList.add("slideoutPhoto");
    document.querySelectorAll(".P3").forEach(element => {
        element.style.display= "block";
    });
    setTimeout( () => {
        document.querySelector(".photo").classList.add("P2");
        document.querySelectorAll(".P2").forEach(element => {
            element.style.display= "none";
        });
    }, 1000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circle3.innerHTML = "<div></div>";
}
function nextPage4 () {
    numPage = 4;
    document.querySelectorAll(".P3").forEach(element => {
        element.classList.add("slideOutTop");
    });
    document.querySelectorAll(".P4").forEach(element => {
        element.style.display = "block";
    });
    setTimeout( () => {
        document.querySelectorAll(".P3").forEach(element => {
            element.style.display = "none";
        });
        document.querySelector(".blocAnim").style.display = "none";
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circle4.innerHTML = "<div></div>";
}
function nextPage5 () {
    numPage = 5;
    document.querySelectorAll(".P4").forEach(element => {
        element.classList.add("slideOutRight");
    });
    document.querySelectorAll(".P5").forEach(element => {
        element.style.display= "block";
    });
    setTimeout( () => {
        document.querySelectorAll(".P4").forEach(element => {
            element.style.display= "none";
        });
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circle5.innerHTML = "<div></div>";
}
// show project
const myWorkIntro = document.querySelector(".myWorkIntro");
const detail1 = document.querySelector(".detail1");
const detail2 = document.querySelector(".detail2");
const detail3 = document.querySelector(".detail3");
const detail4 = document.querySelector(".detail4");
const detail5 = document.querySelector(".detail5");
const detail6 = document.querySelector(".detail6");
const detailArray = [detail1, detail2, detail3, detail4, detail5, detail6];
function showProject(num) {
    myWorkIntro.style.display = "none";
    detailArray.forEach( element => {
        element.style.display= "none";
    });
    detailArray[num-1].style.display = "block";
}
