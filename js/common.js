'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};
$(function() {

    $('input[placeholder], textarea[placeholder]').placeholder();

    var headerScroll = $('.header').offset().top + 30;

    $(document).bind('scroll',function(){
        if($(document).scrollTop() >= headerScroll){
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    }).triggerHandler('scroll');

    var costum_option = {
        infinite: true,
        dots: true,
        arrows: true,
        // asNavFor: '.js-costum-nav',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 769,
                dots: false,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                dots: false,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    $('.js-costum-slick').slick(costum_option);
/*
    var costum_nav_option = {
        infinite: true,
        dots: false,
        centerMode: true,
        asNavFor: '.js-costum-slick',
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    $('.js-costum-nav').slick(costum_nav_option);
*/
    var size_option = {
        infinite: false,
        dots: false,
        asNavFor: '.js-size-nav',
        arrows: false,
        vertical: true,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    $('.js-size-slider').slick(size_option);

    $('.js-size-slider').on('init', function(event, slick, currentSlide, nextSlide){
        var sizeVal = $('.js-size-slider').find('div[data-slick-index='+currentSlide+']').find('.js-size').text();
        $('#js-show-size').text(sizeVal);
    });

    $('.js-size-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var sizeVal = $('.js-size-slider').find('div[data-slick-index='+currentSlide+']').find('.js-size').text();
        $('#js-show-size').text(sizeVal);
    });

    var size_nav_option = {
        infinite: true,
        dots: false,
        asNavFor: '.js-size-slider',
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    $('.js-size-nav').slick(size_nav_option);

    var tkani_option = {
        infinite: true,
        dots: true,
        arrows: false,
        centerMode: true,
        asNavFor: '.js-slider-tkani-info',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 769,
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
    };
    var tkani_optio_info = {
        infinite: true,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-tkani',
        slidesToShow: 1,
        slidesToScroll: 1
    };
    $('.js-slider-tkani').slick(tkani_option);
    $('.js-slider-tkani-info').slick(tkani_optio_info);

    var review_option = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    $('.js-rewiev-init').slick(review_option);

    var color_option = {
        centerMode: true,
        centerPadding: '8px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    $('.js-color-init').slick(color_option);

});


var map;
function initMap() {
    var myLatLng = {lat: 51.5285582, lng: -0.2416797};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        scrollwheel: false,
        center: {lat: 51.5285582, lng: -0.2416797},  // Brooklyn.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Камуфжяжи.Урк'
    });
}