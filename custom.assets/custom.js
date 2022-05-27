window.addEventListener('DOMContentLoaded', event => {
    var navbarScroll = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-active')
        } else {
            navbarCollapsible.classList.add('navbar-active')
        }

    };

    navbarScroll();

    document.addEventListener('scroll', navbarScroll);

    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 100,
    //     });
    // };
});

$(document).ready(function() {
    $('.nav-link').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 300, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navbar .navbar-nav a.active').removeClass('active');
                    $('.navbar .navbar-nav a').eq(i).addClass('active');
            }
    });
}).scroll();

window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }