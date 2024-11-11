const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
        navBtnImg.src = "./img/Menu-Button.svg";
    } else {
        navBtnImg.src = "./img/x.svg";
    }
};
AOS.init();
