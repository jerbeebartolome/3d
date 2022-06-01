// Adding class for stying fixed navigation
window.addEventListener('DOMContentLoaded', event => {
    var navbarScroll = function () {
        const navbarCollapsible = document.body.querySelector('.navigation-wrap');
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

// Smooth Scrolling for browsers who does not support CSS scroll-behavior
$(document).ready(function() {
    $('.nav-link').bind('click', function(a) {
            a.preventDefault();

            var target = $(this).attr("href");

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 300, function() {
                location.hash = target;
            });

            return false;
    });

    // BOOTSTRAP ScrollSpy
    $("#sectionSpy a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
    
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 300, function(){
       
            window.location.hash = hash;
          });
        }
      });
});

