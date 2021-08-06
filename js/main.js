$(() => {

    // load icon ---------------------
    setTimeout(() => {
        $('body').css({
            overflow: 'visible'
        })
        $('.load-icon').fadeOut(700)
    }, 1500);

    // toggle menu
    $('.navbar-toggler').on("click", () => {
        $('.navbar-collapse').slideToggle(500)
    })


    // disable link snoop image
    $('.not-link').click((e) => e.preventDefault())
    // navigation bar
    let nav_items = $('#section-header').find(".nav-item .nav-link").not('.not-link');
    nav_items.click(function (e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop: ($($(this).data('section')).offset().top) - $('nav').outerHeight() - 30
        }, 700)
    })


    // slide up ---------------------
    let slideUpBTn = $('.button-top');


    $(window).scroll(() => {
        checkSlideUp();
        navScroll();
    })

    function checkSlideUp() {

        if ($('html,body').scrollTop() > 600) {
            slideUpBTn.fadeIn(700)
        } else {
            slideUpBTn.fadeOut(700)
        }
    }

    checkSlideUp();

    slideUpBTn.click(() => {
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    })

    // navigation click --------------


    nav_items.on('click', function (e) {
        e.preventDefault();

        let $data_scroll = $(this).data('section');
        $('html,body').animate({
            scrollTop: $('.' + $data_scroll).offset().top - 60
        }, 700)
        // add class active
        $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');

        // hide nav-collapse
        if ($(window).width() <= 968) {
            $(".navbar-collapse").slideUp(500)
        }

    });

    // add class blue to navigation when scrolling
    function navScroll() {

        // add class active to nav items
        for (i = 0; i < nav_items.length; i++) {
            let $nav_item = $(nav_items[i]);

            if ($('html,body').scrollTop() + 80 >= $($nav_item.data('section')).offset().top) {
                $nav_item.addClass('active').parent('li').siblings().find('a').removeClass('active')
            }
        }

    };
    navScroll();
})