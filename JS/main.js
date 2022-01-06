const wrapper = document.querySelector('.testimonials__slide-row');
const indicators = [...document.querySelectorAll('.testimonials__container__indicator button')];

let currentTestimonial = 0; // Default 0



indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})


function openMobileMenu () {
    var mobileMenuWrapper = document.querySelector(".header__mobile-menu-wrapper");
    mobileMenuWrapper.classList.remove("closed");
    mobileMenuWrapper.classList.add("opened");
}

function closeMobileMenu () {
    var mobileMenuWrapper = document.querySelector(".header__mobile-menu-wrapper");
    mobileMenuWrapper.classList.remove("opened");
    mobileMenuWrapper.classList.add("closed");
}





var navbar = document.querySelector("header");
window.addEventListener("scroll", function (){
    if(window.scrollY<150) {
        navbar.style.opacity = "1";

    } else {
        navbar.style.opacity = "0.7";
    }
});



