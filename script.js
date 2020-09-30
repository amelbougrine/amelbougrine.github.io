const menu = document.querySelector(".menu")
function showMenu () {
    menu.classList.toggle("show");
}
function nextPage () {
    document.querySelector(".textContainer").classList.add("slideOut");
    document.querySelector(".frame").classList.add("slideOut");
    document.querySelectorAll(".P2").forEach(element => {
        element.style.display= "block";
    });
    setTimeout( () => {
        document.querySelectorAll(".P1").forEach(element => {
            element.style.display= "none";
        });
    }, 2000);
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
}
function nextPage2 () {
    document.querySelectorAll(".P3").forEach(element => {
        element.style.display= "block";
    });
    document.querySelector(".P2").classList.add("slideOutLeft");
    document.querySelector(".photo").classList.add("slideOutLeft2500");
    
    setTimeout( () => {
        document.querySelector(".photo").classList.add("P2");
        document.querySelectorAll(".P2").forEach(element => {
            element.style.display= "none";
        });
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
