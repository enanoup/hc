// JavaScript for wave
(function($) {
    $(document).ready(function() {
        "use strict";

        // Search Box
        $(".navbar-default .search").on('click', function(e) {
            $(".search-box").toggleClass("active");
            $("body").toggleClass("overflow");
        });


        // FANCYBOX
        $(".fancybox").fancybox({
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });



        // FANCYBOX VIDEO
        $(".fancybox").on("click", function() {
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            }); // fancybox
            return false
        });

        // MASONRY GRID
        var $container = $('.gallery ul');
        $container.masonry({
            itemSelector: '.gallery ul li'
        });




        // MOBILE MENU
        $('.toggle-menu').jPushMenu({ closeOnClickLink: false });
        $('.dropdown-toggle').dropdown();


        // FIXED HEADER
        $(window).on("scroll touchmove", function() {
            $('.navbar-default').toggleClass('fixed-active', $(document).scrollTop() > 1);

        });




        // GO TO TOP
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });




        // OWL SLIDEr		
        $(".owl-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            smartSpeed: 450

        });


        // OWL CAROUSEL		
        $(".owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            center: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            smartSpeed: 450,
            responsive: {
                375: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 3,
                },
                1199: {
                    items: 3,
                }
            }
        });



    });



    // COUNTER EFFECT
    var n = document.getElementById("counter");
    if (n == null) {} else {

        var lastWasLower = false;
        $(document).scroll(function() {

            var p = $("#counter");
            var position = p.position();
            var position2 = position.top;

            if ($(document).scrollTop() > position2 - 300) {
                if (!lastWasLower)
                    $('#1').html('93');
                $('#2').html('7305');
                $('#3').html('23');

                lastWasLower = true;
            } else {
                lastWasLower = false;
            }
        });
    };


    // WOW ANIMATION
    wow = new WOW({
        animateClass: 'animated',
        offset: 50
    });
    wow.init();


})(jQuery);