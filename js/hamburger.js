const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("hidden");
    if(nav.classList.contains("hidden")){
        
    }
    else{
        nav.removeAttribute("style");
    }
}