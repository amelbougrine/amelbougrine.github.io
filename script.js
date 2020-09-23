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