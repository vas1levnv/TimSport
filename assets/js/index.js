$(document).ready(function () {

    const swiper = new Swiper('.home-page', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const swiperEquipment = new Swiper('.equipment__swiper-mobile', {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 8,
        pagination: {
            el: '.swiper-pagination',
        },
    });


    $(".header-icon").click(function (event) {
        $(".header-icon, .toggle-menu, .header-bg").toggleClass('active')
        $('body').toggleClass('lock')
    })
    $(".toggle-menu__links-item").click(function (event) {
        $(".header-icon, .toggle-menu, .header-bg").toggleClass('active')
        $('body').toggleClass('lock')
    })

    $(".header-bg").click(function (event) {
        $(".header-icon, .toggle-menu, .header-bg").toggleClass('active')
        $('body').toggleClass('lock')
    })

    const menuLinks = document.querySelectorAll(".menu__link[data-goto]")
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuClickLick)
        })

        function onMenuClickLick(e) {
            const menuLink = e.target
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault()

            }
        }
    }

});
