window.addEventListener('DOMContentLoaded', event => {
    var navbarScroll = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }

        // Assign active class to mainNav when scolling
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-active')
        } else {
            navbarCollapsible.classList.add('navbar-active')
        }

    };

    navbarScroll();
    document.addEventListener('scroll', navbarScroll);
});

$(document).ready(function() {
    $('.nav-link').bind('click', function(e) {
            e.preventDefault();

            var target = $(this).attr("href");

            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 300, function() {
                    location.hash = target;
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Add an active class to nav links when scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navbar .navbar-nav a.active').removeClass('active');
                $('.navbar .navbar-nav a').eq(i).addClass('active');
            }
    });
}).scroll();