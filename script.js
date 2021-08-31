const servicesList = document.querySelectorAll(".service");
const spanList = document.querySelectorAll(".span");

function showServices (serviceName) {
    servicesList.forEach(elem => elem.classList.remove("active"));
    spanList.forEach(elem => elem.classList.remove("active"));

    if (serviceName =="Design") {
        servicesList[0].classList.add("active");
        spanList[0].classList.add("active");
    }
    if (serviceName =="Front") {
        servicesList[1].classList.add("active");
        spanList[1].classList.add("active");
    }
    if (serviceName =="Seo") {
        servicesList[2].classList.add("active");
        spanList[2].classList.add("active");
    }

}

