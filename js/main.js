$(document).ready(function () {
    $(".portfolio-slider__inner").slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg"></img></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    fade: true,
                },
            },
        ],
    });
});

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav__menu");
const body = document.querySelector("body");

document.addEventListener("click", function (e) {
    if (e.target.closest(".menu-btn")) {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("clicked");
        body.classList.toggle("no-scroll");
    } else {
        menu.classList.remove("active");
        menuBtn.classList.remove("clicked");
        body.classList.remove("no-scroll");
    }
    if (menu.classList.contains("active")) {
        menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
        menu.style.maxHeight = null;
    }
});

const anchors = document.querySelectorAll(".scroll-to");

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector(".nav").offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
}

var mixer = mixitup(".portfolio-gallery", {});
