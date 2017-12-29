/**	
	* Template Name: Eventoz
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FIXED MENU
	2. EVENT TIME COUNTER
	3. MENU SMOOTH SCROLLING
	4. VIDEO POPUP
	5. SPEAKERS SLIDEER ( SLICK SLIDER )
	6. BOOTSTRAP ACCORDION 
	7. MOBILE MENU CLOSE  
	
	
**/



(function ($) {



    /* ----------------------------------------------------------- */
    /*  1. FIXED MENU
	/* ----------------------------------------------------------- */


    jQuery(window).bind('scroll', function () {
        if ($(window).scrollTop() > 150) {
            //$('.mu-navbar').addClass('mu-nav-show');

            //} else {
            //    $('.mu-navbar').removeClass('mu-nav-show');
            //}
            $('.mu-navbar').addClass('nav-bar-solid');
            $('#nav-brandname').removeClass('hidden');

        } else {
            $('#nav-brandname').addClass('hidden');
            $('.mu-navbar').removeClass('nav-bar-solid');
        }
    });

    /* ----------------------------------------------------------- */
    /*  2. EVENT TIME COUNTER
	/* ----------------------------------------------------------- */

    $('#mu-event-counter').countdown(/*'2018/01/02'*/$('#timer').val()).on('update.countdown', function (event) {
        //var $this = $(this).html(event.strftime(''
        //  + '<span class="mu-event-counter-block"><span>%D</span> Days</span> '
        //  + '<span class="mu-event-counter-block"><span>%H</span> Hours</span> '
        //  + '<span class="mu-event-counter-block"><span>%M</span> Mins</span> '
        //  + '<span class="mu-event-counter-block"><span>%S</span> Secs</span>'
        //  ));

        var $this = $(this).html(event.strftime(''
            + '<span class="mu-event-counter-block-down i1">'
            + '<span style="position: relative;bottom: 162px;right: 20px;">%D</span> '
            + '<span style="position: relative;bottom: 230px;font-size: 15px;right: 19px">Days</span>'
            + '</span>'
            + '<span class="mu-event-counter-block-up i1">'
            + '<span style="position: relative;bottom: 22px;right: 24px;">%H</span>'
            + '<span style="position: relative;bottom: 90px;font-size: 15px;right: 19px;">Hours</span>'
            + '</span>'
            + '<span class="mu-event-counter-block-down i2">'
            + '<span style="position: relative;bottom: 162px;right: 20px;">%M</span>'
            + '<span style="position: relative;bottom: 230px;font-size: 15px;right: 19px">Mins</span>'
            + '</span>'
            + '<span class="mu-event-counter-block-up i2">'
            + '<span style="position: relative;bottom: 22px;right: 24px;">%S</span>'
            + '<span style="position: relative;bottom: 90px;font-size: 15px;right: 19px;">Secs</span>'
            + '</span>'
        ));
    });


    /* ----------------------------------------------------------- */
    /*  3. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */

    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

    // Cache selectors
    var lastId,
	topMenu = $(".mu-menu"),
	topMenuHeight = topMenu.outerHeight() + 13,
	// All list items
	menuItems = topMenu.find('a[href^=\\#]'),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
	    var item = $($(this).attr("href"));
	    if (item.length) { return item; }
	});

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 22;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1500);
        e.preventDefault();
    });

    // Bind to scroll
    jQuery(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            var tosetActive = menuItems
                .parent().removeClass("active")
                .end().filter("[href=\\#" + id + "]");
            if (id.indexOf('hero') === -1)
                tosetActive.parent().addClass("active");
        }
    });


    /* ----------------------------------------------------------- */
    /*  4. VIDEO POPUP
	/* ----------------------------------------------------------- */

    $('.mu-video-play-btn').on('click', function (event) {

        event.preventDefault();

        $('.mu-video-iframe-area').addClass('mu-video-iframe-display');

    });

    // when click the close btn

    // disappear iframe window

    $('.mu-video-close-btn').on('click', function (event) {

        event.preventDefault();

        $('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

    });

    // stop iframe if it is play while close the iframe window

    $('.mu-video-close-btn').click(function () {

        $('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

    });

    // when click overlay area

    $('.mu-video-iframe-area').on('click', function (event) {

        event.preventDefault();

        $('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

    });

    $('.mu-video-iframe-area, .mu-video-iframe').on('click', function (e) {
        e.stopPropagation();
    });


    /* ----------------------------------------------------------- */
    /*  5. SPEAKERS SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

    $('.mu-speakers-slider').slick({
        slidesToShow: 4,
        responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows: true,
                  slidesToShow: 1
              }
          }
        ]
    });





    /* ----------------------------------------------------------- */
    /*  6. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */

    /* Start for accordion #1*/
    $('#accordion .panel-collapse').on('shown.bs.collapse', function () {
        $(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

    //The reverse of the above on hidden event:

    $('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
        $(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    });


    /* ----------------------------------------------------------- */
    /*  7. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */

    jQuery('.mu-menu').on('click', 'li a', function () {
        $('.mu-navbar .in').collapse('hide');
    });

})(jQuery);
