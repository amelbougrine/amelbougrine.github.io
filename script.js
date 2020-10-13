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

circle2.addEventListener("click", () => {
    if (numPage != 2 && numPage == 1) {
        nextPage2 ();
        console.log(numPage);
    }
});
circle3.addEventListener("click", () => {
    if (numPage != 3 && numPage == 2) {
        nextPage3 ();
        console.log(numPage);
    }
});
circle4.addEventListener("click", () => {
    if (numPage != 4 && numPage == 3) {
        nextPage4 ();
        console.log(numPage);
    }
});
circle5.addEventListener("click", () => {
    if (numPage != 5 && numPage == 4) {
        nextPage5 ();
        console.log(numPage);
    }
});

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
        element.style.display= "block";
    });
    setTimeout( () => {
        document.querySelectorAll(".P3").forEach(element => {
            element.style.display= "none";
        });
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
const detail1 = `<div class="test"> <img src="images/img1.gif"/> <button>click here</button> </div>`;
const detail2 = "<div>Project2</div>";
const detail3 = "<div>Project3</div>";
const detail4 = "<div>Project4</div>";
const detail5 = "<div>Project5</div>";
const detail6 = "<div>Project6</div>";
const detailArray = [detail1, detail2, detail3, detail4, detail5, detail6];
function showProject(num) {
    document.querySelector(".projectText").innerHTML = detailArray[num-1];
}
