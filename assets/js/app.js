const headerBurger = document.querySelector(".header__burger");
const headerList = document.querySelector(".header__list");
const headerLinks = document.querySelectorAll(".header__link");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active")
    headerList.classList.toggle("active")
})
headerLinks.forEach((el) => {
    el.addEventListener('click', () => {
        headerBurger.classList.remove("active")
        headerList.classList.remove("active")
    })
})


let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2.5,
        },
    },
})

let fullNameTyped = new Typed("#fullName", {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
    strings: ["Vugar", "Balakishiyev"],
    typeSpeed: 50
});