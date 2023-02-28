$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
});

$('.glimpse').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right_arrow"></i>',
});


$('.module-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});


const demoButton = document.getElementById('demo-button')
const demoContainer = document.querySelector('.demo-container')
const closeForm = document.querySelector('.hide')
const Body = document.querySelector('body')
demoButton.addEventListener('click', () => {
    demoContainer.classList.add('active')
    Body.style.overflowY = "hidden";

});

closeForm.addEventListener('click', () => {
    demoContainer.classList.remove('active')
    Body.style.overflowY = "auto";
})


const topNavbar = document.querySelector('.nav-container')
const navLinks = document.querySelectorAll('.navlinks')
const demoReq = document.getElementById('demo-button')
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topNavbar.classList.add('nav-bg');
        demoReq.classList.add('demo-scroll');
        for (const elem of navLinks) {
            elem.classList.add('nav-links')
        }
    } else {
        topNavbar.classList.remove('nav-bg');
        demoReq.classList.remove('demo-scroll');
        for (const elem of navLinks) {
            elem.classList.remove('nav-links')
        }
    }

})



// const navAbout = document.querySelector('.about')
// const navFeatures = document.querySelector('.features')
// const navModules = document.querySelector('.modules')
// const navContact = document.querySelector('.contact')
// const navbarBackdrop = document.querySelector('.navbar-backdrop')
// const sideNav = document.querySelector('.sideNav')
// navAbout.addEventListener('click', () => {
    

// })


