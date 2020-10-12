const menu = document.querySelector(".menu")
function showMenu () {
    menu.classList.toggle("show");
}
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");

function nextPage1 () {
    document.querySelector(".textContainer").classList.add("slideOutTop");
    document.querySelector(".frame").classList.add("slideOutTop");
    document.querySelectorAll(".P2").forEach(element => {
        element.style.display= "block";
    });
    setTimeout( () => {
        document.querySelectorAll(".P1").forEach(element => {
            element.style.display = "none";
        });
        circle1.innerHTML = "";
        circle2.innerHTML = "<div></div>";
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
}
function nextPage2 () {
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
        circle2.innerHTML = "";
        circle3.innerHTML = "<div></div>";
    }, 1000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
}
function nextPage3 () {
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
        circle3.innerHTML = "";
        circle4.innerHTML = "<div></div>";
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
}
function nextPage4 () {
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
        circle4.innerHTML = "";
        circle5.innerHTML = "<div></div>";
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
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
