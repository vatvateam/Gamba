jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    gamba.mainFunction = function() {

        //JS for homepage 2 - background video
        if ($(window).width() > 767) {
            $(".btn-play").on('click', function(event) {
                $(".bg-image").addClass('show-video');
                $(".btn-pause").removeClass('show-video');
                $(".btn-play").addClass('show-video');
            });

            $(".btn-pause").on('click', function(event) {
                $(".bg-image").removeClass('show-video');
                $(".btn-pause").addClass('show-video');
                $(".btn-play").removeClass('show-video');
            });
        }


        // slide homepage 3 - background slide
        var slider_rtl_1 = $('.background-slide');
        slider_rtl_1.attr('dir', 'rtl');
        slider_rtl_1.slick({
            rtl: true,
            dots: false,
            arrows: false,
            speed: 700,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: 'linear',
            pauseOnHover: false
        });
       
        $('.background-slide').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active  .logo-images').addClass('animated fadeInDown');
            $('.slick-active  .group-btn-2').addClass('animated fadeInUp');
            $('.slick-active  .group-title').addClass('animated fadeInUp');
            $('.slick-active  .group-title-2').addClass('animated fadeInRight');
            $('.slick-active  .group-open-hours').addClass('animated fadeInRight');
            $('.slick-active  .btn-left').addClass('animated fadeInLeft');
            $('.slick-active  .btn-right').addClass('animated fadeInRight');
            $('.slick-active  .btn-center').addClass('animated zoomIn');
            $('.slick-active  .logo-images').removeClass('hidden');
            $('.slick-active  .group-btn-2').removeClass('hidden');
            $('.slick-active  .group-title').removeClass('hidden');
            $('.slick-active  .group-title-2').removeClass('hidden');
            $('.slick-active  .group-open-hours').removeClass('hidden');
            $('.slick-active  .btn-left').removeClass('hidden');
            $('.slick-active  .btn-right').removeClass('hidden');
            $('.slick-active  .btn-center').removeClass('hidden');
        });

        $('.background-slide').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active  .logo-images').removeClass('animated fadeInDown');
            $('.slick-active  .group-btn-2').removeClass('animated fadeInUp');
            $('.slick-active  .group-title').removeClass('animated fadeInUp');
            $('.slick-active  .group-title-2').removeClass('animated fadeInRight');
            $('.slick-active  .group-open-hours').removeClass('animated fadeInRight');
            $('.slick-active  .btn-left').removeClass('animated fadeInLeft');
            $('.slick-active  .btn-right').removeClass('animated fadeInRight');
            $('.slick-active  .btn-center').removeClass('animated zoomIn');
            $('.slick-active  .logo-images').addClass('hidden');
            $('.slick-active  .group-btn-2').addClass('hidden');
            $('.slick-active  .group-title').addClass('hidden');
            $('.slick-active  .group-title-2').addClass('hidden');
            $('.slick-active  .group-open-hours').addClass('hidden');
            $('.slick-active  .btn-left').addClass('hidden');
            $('.slick-active  .btn-right').addClass('hidden');
            $('.slick-active  .btn-center').addClass('hidden');
        });

       
        // slide special menu
        var slider_rtl_2 = $('.special-menu .list-dish');
        slider_rtl_2.attr('dir', 'rtl');
        slider_rtl_2.slick({
            rtl: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        autoplay: false
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        autoplay: false
                    }
                }
            ]
        });

        // slide new of the day
        var slider_rtl_3 = $('.new-of-day .list-news');
        slider_rtl_3.attr('dir', 'rtl');
        slider_rtl_3.slick({
            rtl: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            dots: true,
            arrows: false,
            customPaging : function(slider, i) {
                //var thumb = $(slider.$slides[i]).data('thumb');
                var i = i + 1;
                return '<button>' + '0' + i + '</button>';
            }
        });

        // slide list infomation
        var slider_rtl_4 = $('.list-infomation');
        slider_rtl_4.attr('dir', 'rtl');
        slider_rtl_4.slick({
            rtl: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false
                    }
                }
            ]
        });

        // slide list chefs
        var slider_rtl_5 = $('.our-chefs-list');
        slider_rtl_5.attr('dir', 'rtl');
        slider_rtl_5.slick({
            rtl: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 900,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false
                    }
                }
            ]
        });

        // slide testimonial
        var slider_rtl_6 = $('.slider-for');
        slider_rtl_6.attr('dir', 'rtl');
        slider_rtl_6.slick({
            rtl: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            //fade: true,
            asNavFor: '.slider-nav'
        });

        var slider_rtl_7 = $('.slider-nav');
        slider_rtl_7.attr('dir', 'rtl');
        slider_rtl_7.slick({
            rtl: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px'
        });

    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
