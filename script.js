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

const textContainer = document.querySelector(".textContainer");
const frame = document.querySelector(".frame");
const photo = document.querySelector(".photo");
const blocAnim = document.querySelector(".blocAnim");
const P1 = document.querySelector(".P1");
const P2 = document.querySelector(".P2");
const P3 = document.querySelectorAll(".P3");
const P4 = document.querySelector(".P4");
const P5 = document.querySelector(".P5");
const pages = [P1, P2, P3, P4, P5];

function nextPage2 () {
    numPage = 2;
    textContainer.classList.add("slideOutTop");
    frame.classList.add("slideOutTop");
    P2.style.display= "block";
    setTimeout( () => {
        P1.style.display = "none";
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
    P2.classList.add("slideOutLeft");
    photo.classList.add("slideoutPhoto");
    P3.forEach(element => {
        element.style.display= "block";
    });
    setTimeout( () => {
        photo.style.display= "none";
        P2.style.display= "none";
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
    P3.forEach(element => {
        element.classList.add("slideOutTop");
    });
    P4.style.display = "block";
    setTimeout( () => {
        P3.forEach(element => {
            element.style.display = "none";
        });
        blocAnim.style.display = "none";
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
    P4.classList.add("slideOutRight");
    P5.style.display= "block";
    setTimeout( () => {
        P4.style.display= "none";
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circle5.innerHTML = "<div></div>";
}
function nextPage1 () {
    numPage = 1;
    P5.classList.add("slideOutDown");
    textContainer.classList.remove("slideinLeft");
    // textContainer.classList.add("slideInDown");
    P1.classList.add("slideInDown");
    P1.style.display= "block";
    photo.classList.remove("slideinPhoto");
    photo.classList.add("slideInDown");
    photo.style.display= "block";
    setTimeout( () => {
        P5.style.display= "none";
    }, 1500);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    circles.forEach(element => {
        element.innerHTML = "";
    });
    circle1.innerHTML = "<div></div>";
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
// show page
function Page(num) {
    for (let i=0; i<pages.length; i++) {
        if (i==2) {
            pages[i].forEach(element => {
                element.style.display= "none";
            });
        } else {
            pages[i].style.display= "none";
        }
        console.log(pages[i]);
    };
    photo.style.display = "none";

    if (num == 3) {
        pages[num-1].forEach(element => {
            element.classList.remove("slideinright");
            element.classList.add("zoomIn");
            element.style.display = "block";
        });
    } else {
        pages[num-1].classList.remove("slideUp665", "slideleft", "slideInUp", "slideOutDown", "slideInDown");
        pages[num-1].classList.add("zoomIn");
        pages[num-1].style.display = "block";
    }
    if(num == 1 || num == 2) {
        photo.classList.remove("slideinPhoto");
        photo.classList.add("zoomIn");
        photo.style.display = "block";
    }
    if(num == 4) {
        blocAnim.style.display = "none";
    }
    showMenu();
}