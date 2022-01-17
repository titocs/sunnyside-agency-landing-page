const topNav = document.querySelector(".top-nav");
const arrow = document.querySelector(".arrow");
const hambuger = document.querySelector("#image-hamburger");
const contact = document.querySelector("#contact");

hambuger.addEventListener("click", function(){
    topNav.classList.toggle("displayBlock");
    topNav.classList.toggle("displayTopNav");
    contact.style.color = "var(--Very-dark-desaturated-blue)";
    contact.style.fontFamily = "'Fraunces', serif";
    contact.style.backgroundColor = "var(--Yellow)";
    contact.style.borderRadius = "25px";
    contact.style.padding = "15px 21px";
    contact.style.textDecoration = "none";
    contact.style.marginTop = "1em";
    hambuger.classList.toggle("setOpacity");
});