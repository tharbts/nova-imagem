$(document).ready(function(){

    //carousel bootstrap
    $('.carousel').carousel({
        interval: 8000,
        pause: false,
        touch: true
    })

    //loading page
    setTimeout(function(){

    }, 3000);

    $('#loading').fadeOut("slow");
    $('#content').show();

    //lading objects
    new WOW().init();

    //back to top button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $('#goTop-btn').show();
        } else {
            $('#goTop-btn').hide();
        }

        if($(this).scrollTop() < $(this).height()){
            setActive('slideShow');
        }

    });

    $('#goTop-btn').click(function () {
        $('body,html').animate({scrollTop: 0}, 600);
        setActive('slideShow');

    });

    //goto links
    $('.goTo').click(function () {

        event.preventDefault();

        goTo(this);
    });

    $(window).resize(function(){
        if($(window).width() > 992){
            if($('#navBarMob-menu').hasClass('fadeInLeft')){
                $('#navBarMob-menu').removeClass('fadeInLeft');
                $('#navBarMob-menu').addClass('d-none');
            }
        }
    });

});

function animateSlideFadeIn(element, direction) {
    element = $('#' + element);

    element.removeClass('d-none');

    if(! element.hasClass('animated')){
        element.addClass('animated');
    }

    if(element.hasClass('fadeIn' + direction)){
        element.removeClass('fadeIn' + direction);
        element.addClass('fadeOut' + direction);
    }else{
        element.removeClass('fadeOut' + direction);
        element.addClass('fadeIn' + direction);
    }

}

function runAnimation(element, animation){
    element = $(element);

    if(! element.hasClass('animated')){
        element.addClass('animated');
    }

    element.addClass(animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        element.removeClass(animation)
    });
}

function slideShow(isFristTime = false){

    if(!isFristTime){
        $('.slideShow').each(function(el){

            if(!$(this).hasClass('d-none')){

                if($(this).next().length > 0){
                    $(this).next().removeClass('d-none');
                }
                else{
                    $('.slideShow').first().removeClass('d-none');
                }

                $(this).addClass('d-none');

                return false;
            }

        });
    }


    setTimeout(slideShow, 8000);
}

function goTo(val) {
    div = '#' + $(val).attr('href');
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 2000, function(){
        setActive($(val).attr('href'));
    });

    if($('#navBarMob-menu').hasClass('fadeInLeft')){
        $('#navBarMob-menu').removeClass('fadeInLeft');
        $('#navBarMob-menu').addClass('fadeOutLeft');
    }
}

function setActive(href){
    $('#navBarDesk-menu > ul > li, #navBarMob-menu > ul > li').each(function(){
        li = $(this).children();

        if($(li).attr('href') == href && !$(li).hasClass('active')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    })
}